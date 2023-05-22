/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");

module.exports = {
  new: async function (req, res) {
    let categories = await Category.find();
    res.view('pages/product/new', { categories });
  },

  create: async function (req, res) {
    sails.log.debug("Create product....")
    let params = req.allParams();
    await Product.create(params);
    res.redirect ('/product' );
  },

  find: async function (req, res) {
    sails.log.debug("List all products....")
    let products;
    if (req.query.q && req.query.q.length > 0) {
        products = await Product.find({
        name: {
          'contains': req.query.q
        }
      })
    } else {
        products = await Product.find().populate("category");
    }
    res.view ('pages/product/index', { products: products } );
  },

  findOne: async function (req, res) {
    sails.log.debug("List single product....")
    let product = await Product.findOne({ id: req.params.id });
    res.view ('pages/product/show', { product: product } );
  },

  destroyOne: async function (req, res) {
    sails.log.debug("Destroy single product....")
    await Product.destroyOne({ id: req.params.id });
    res.redirect('/product');
  },

  editOne: async function (req, res) {
    sails.log.debug("Edit single product....")
    let product = await Product.findOne({ id: req.params.id }).populate('category');
    res.view('pages/product/edit', { product: product });
  },

  updateOne: async function (req, res) {
    sails.log.debug("Update single product....")
    let product = await Product.updateOne({ id: req.params.id }).set(req.body);
    res.redirect('/product');
  }
};

