module.exports = {
    attributes: {
        name: { 
            type: 'string', 
            columnType: 'varchar(80)', 
            required: true 
        },
        source: {
            //Bildquelle richtig machen
            type: 'string', 
            columnType: 'varchar(80)', 
            required: true 
        },
        product: {
            model: 'product'
        }
    },        
  };