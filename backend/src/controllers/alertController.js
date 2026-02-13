import Inventory from "../models/productModel.js";


const lowStock = async (req, res) => {
    try {

        // find low stock products ( quantity <= alert_threshold )
        const low = await Inventory.find({
            $expr: { $lte: ["$quantity", "$alert_threshold"] }
        })

        if (low) {
            return res.status(200).json({
                count: `Total Low Stock Products - ${low.length}`,
                data: low
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

// Soon to expiry products
const soonToExpiry = async (req, res) => {
    try {

        const today = new Date();
        const next90Days = new Date();
        next90Days.setDate(today.getDate() + 90);


        const expiry = await Inventory.find({
            expiry_date: { $lte: next90Days }
        })

        if (expiry) {
            res.status(200).json({
                count: `Total Soon to Expiry Products - ${expiry.length}`,
                data: expiry
            })
        }

    } catch (error) {

    }
}

export { lowStock, soonToExpiry };