module.exports = {
    attributes: {
        name: {
            type: 'string',  
            columnType: 'varchar(80)',  
            required: true,
        },
        products: {
            collection: 'product',
            via: 'category'
        }
    }
  };