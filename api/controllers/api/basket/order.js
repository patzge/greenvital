module.exports = {


  friendlyName: 'Order',


  description: 'Order basket.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    console.log("Order Basket.....")
    let basket =  this.req.session.basket
    let address =  this.req.session.address

    let productOrder = await ProductOrder.create({
      user: this.req.me.id,
      name: address.name,
      address: address.address,
    }).fetch();
    console.log("Entity: "+productOrder)
    console.log("Entity Id: "+productOrder.id)

    basket.forEach(product =>  {
      ProductOrderItem.create({
        count: 1,
        productOrder: productOrder.id,
        product: product.id
      }).then();
      console.log(product)
    });
  }
};
