Tail = require('tail').Tail;
var path = require("path")

//var filename = path.resolve(process.argv[2]);

module.exports = function(filename){
  filename = path.resolve(filename)
  tail = new Tail(filename);

  tail.on("line", function(data) {
    try{
      var parsed = JSON.parse(data)
      console.log(JSON.stringify(parsed, null, "  "))
    }catch(e){
      console.log(data);
    }
  });
}
