/**
 * ProductOrder.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: { type: 'string', columnType: 'varchar(80)', required: true },
    address: { type: 'string', columnType: 'varchar(120)', required: true },
    user: {
      model: 'User'
    },
    items: {
      collection: 'productOrderItem',
      via: 'productOrder'
  }




  },

};

