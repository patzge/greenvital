module.exports = {
    attributes: {
        value: { 
            type: 'number', 
            columnType: 'DECIMAL(1,0)', 
            required: true 
        },
        description: { 
            type: 'string', 
            columnType: 'varchar(80)' 
        },
        product: {
            model: 'product'
        }
    },        
  };