var express = require('express');
    bodyParser = require('body-parser');
    app = express();

app.use(bodyParser.urlencoded({
    extended:false
}));

app.get('/',function(req,res,next){
    res.send('index');
    next();
});

app.all('/test',function(req,res,next){
    console.log('test 1');
    if(false){
        next();
    }else{
        res.status(403).send({msg:'验证失败.'});
    }
}); 

app.post('/test',function(req,res,next){
    res.status(200).send({
        method: 'POST',
        path: req.path,
        body: req.body,
        query: req.query
    });
    next();
});

app.get('/test',function(req,res,next){
    res.send('test');
    next();
});

app.delete('/user/:id',function(req,res,next){
    console.log('删除 ID 为',req.params.id,'的用户。');
    if(req.query.admin === '1'){
        console.log('删除成功。');
        res.status(200).end();
    } else {
        console.log('删除失败。');
        res.status(403).end();
    }
});

app.get('/user/:name',function(req,res,next){
    res.send({
        user: req.params.name
    });
});

app.listen(3000,function(){
    console.log('lesson_4 running...');
});
