var Parse = require('./lib/parse');

function DataSchema(){
}

DataSchema.parse=Parse.parse;

module.exports = {
    DataSchema: DataSchema
}
