var fs = require('fs');

function checkuser(opi,next){
  fs.readFile('test.md','utf8',function(err,data){
    var user=JSON.parse(data)
    console.log(user);
  })
}

module.exports=checkuser
