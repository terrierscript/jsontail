Tail = require('tail').Tail;

tail = new Tail("./sample");

tail.on("line", function(data) {
  try{
    var parsed = JSON.parse(data)
    console.log(JSON.stringify(parsed, null, "  "))
  }catch(e){
    console.log(data);
  }
});
