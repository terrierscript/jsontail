Tail = require('tail').Tail;
var path = require("path")
var filename = path.resolve(process.argv[2]);
tail = new Tail(filename);

tail.on("line", function(data) {
  try{
    var parsed = JSON.parse(data)
    console.log(JSON.stringify(parsed, null, "  "))
  }catch(e){
    console.log(data);
  }
});
