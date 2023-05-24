/**
 * CatalogController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");

module.exports = {

    catalog: async function (req, res) {
        let categories = await Category.find().populate("products");
        res.view('pages/catalog', { categories });
    }
};

