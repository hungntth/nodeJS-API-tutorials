const productModel = require('../models').Product;
const { Op } = require("sequelize");



//GET ALL PRODUCT

const getAllProduct = (req, res) => {
    try {
        productModel.findAll({
            // attributes: ["id", "name"],
            // limit: 2,
            // offset: 2,
            // order: [["id", "DESC"]],
            // where: {
            //     id: { [Op.eq]: 3, }
            // }
        }).then((data) => {
            if (data) {
                return res.status(200).json({
                    status: 1,
                    message: "Products Found",
                    data: data
                })
            } else {
                return res.status(200).json({
                    status: 1,
                    message: "No Products Found",
                    data: data
                })
            }
        })

    } catch (error) {
        res.json(error)
    }
}

module.exports = { getAllProduct }