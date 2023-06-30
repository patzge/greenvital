module.exports = {


    friendlyName: 'delete basket',
  
  
    description: 'delete basket.',
  
  
    inputs: {

    },
  
  
    exits: {
  
    },
  
  
    fn: async function (inputs) {
        console.log("Delete basket...")
        this.req.session.basket = [];
      return;
    }
  
  
  };