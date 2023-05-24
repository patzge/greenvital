/**
 * ProductOrderItem.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    count: { type: 'number',  columnType: 'DECIMAL (6,2)',  required: true},
    productOrder: {
        model: 'productOrder'
    },
    product: {
      model: 'Product'
    },
  },

};

