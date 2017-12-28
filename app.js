var express = require('express');
app = express();

app.use(express.static('public'));

app.get('/whoami', function(req,res){
  var headers = req.headers
  var software = headers['user-agent'];
  software = software.slice(software.indexOf('(')+1,software.indexOf(')'));
  var language = headers['accept-language'];
  language = language.slice(0,language.indexOf(','));
  ipadress = req.connection.remoteAddress;
  res.json({ipadress:ipadress, language:language, software:software});
})


app.listen(3000, function(){
  console.log('server running...')
})
