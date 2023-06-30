/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

const ProductController = require("../api/controllers/ProductController");

module.exports.routes = {

   //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  'GET /signup':             { action: 'entrance/view-signup' },
  'GET /login':              { action: 'entrance/view-login' },

  'GET /account':            { action: 'account/view-account-overview' },
  'GET /account/password':   { action: 'account/view-edit-password' },
  'GET /account/profile':    { action: 'account/view-edit-profile' },

  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the Parasails library, or by using those method names as the `action` in <ajax-form>.
  'GET /logout':                         { action: 'account/logout' },
  'POST  /login':                        { action: 'entrance/login' },
  'POST  /signup':                       { action: 'entrance/signup' },
  'POST  /signup':                       { action: 'entrance/signup' },
  'POST  /updateProfile':                { action: 'account/update-profile' },
  'POST  /updatePassword':               { action: 'account/update-password' },
  'POST  /signup':                       { action: 'entrance/signup' },
  'POST  /welcome':                      { action: 'view-homepage-or-redirect' },



  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/index' },

  'GET /catalog': { controller: 'CatalogController', action: 'catalog'},

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/
  
  'GET /admin': {view: 'pages/admin'},

  'GET /product/new': {controller: 'ProductController', action:'new'},
  'POST /product': { controller: 'ProductController', action:'create' },
  'GET /product': 'ProductController.find',
  'GET /product/show': 'product.findOne',

  'GET /product/:id/edit': { controller: 'ProductController', action: 'editOne' },
  'POST /product/:id/update': { controller: 'ProductController', action: 'updateOne' },
  'GET /product/:id/destroy': { controller: 'ProductController', action: 'destroyOne' },
 
  'GET /category/new': { view: 'pages/category/new' },
  'POST /category': { controller: 'CategoryController', action:'create' },
  'GET /category/:id/destroy': { controller: 'CategoryController', action: 'destroyOne' },
  'GET /category': { controller: 'CategoryController', action: 'find' },


  /***************************************************************************
  *                                                                          *
  *       Shopping Basked API                                                *
  *                                                                          *
  ***************************************************************************/

  'GET /shopping': { action: 'view-catalog-shopping' },
  
  'GET /api/category': { action: 'api/category/index'},

  'GET /api/basket': {  action:'api/basket/get' },
  'POST /api/basket': {  action:'api/basket/add' },
  'POST /api/address': {  action:'api/basket/post-address' },
  'GET /api/order': {  action:'api/basket/order' },
  'POST /api/basket/delete': {  action:'api/basket/delete' },
};
