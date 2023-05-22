module.exports = {
    attributes: {
        name: { 
            type: 'string', 
            columnType: 'varchar(80)', 
            required: true 
        },
        description: { 
            type: 'string', 
            columnType: 'varchar(80)' 
        },
        price: { 
            type: 'number',  
            columnType: 'DECIMAL (6,2)',  
            required: true
        },
        quantity:{
            type: 'number',
            columnType: 'DECIMAL (6,0)',
            required: true
        },
        category: {
            model: 'category'
        },
        pictures: {
            collection: 'picture',
            via: 'product'
        },
        ratings: {
            collection: 'rating',
            via: 'product'
        }
    },        
  };