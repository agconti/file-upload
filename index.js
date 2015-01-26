var app = require('express')()
  , morgan = require('morgan')
  , multer = require('multer')
  , port = +process.env.PORT || 3000


// app config
app.use(morgan('combined'))
app.use(multer({ dest: './uploads/'}))


// app routes
app.get('/', function(req, res){
  var msg = 'This app only accepts post requests. '
           +'Feed me. I eat, anything mulitpart. Find the files in'
           +__dirname + '/uploads/.'
  res.send(msg)
})
app.post('/', function(req, res){
  console.log(req.body)
  console.log(req.files)
  res.status(204).end()
})


var server = app.listen(port, function(){

  console.log( 'app is live at http://%s:%s/'
             , server.address().address
             , server.address().port
             )
})
