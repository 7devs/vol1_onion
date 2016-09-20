var app = require('express')();
    bodyParser = require('body-parser');
    tool = require('./lib/tool.js');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/user',require('./lib/routers/users'));

app.use('/album',require('./lib/routers/albums'));

app.use('/*',function(req,res,next){
    res.status(404).send('Not Found')
});

app.listen(3000,function(){
    tool.printLine();
    tool.printDate();
    tool.printLine();
    console.log('Go GO Go !!!');
    tool.printLine();
});
