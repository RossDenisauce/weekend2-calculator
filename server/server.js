const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 9000;

let calculation;
let calcSpace = [];

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

function testType(obj){
    if(obj.type == '+'){
        return (parseInt(obj.x) + parseInt(obj.y));
    } else if(obj.type == '-'){
        return (parseInt(obj.x) - parseInt(obj.y));
    }else if(obj.type == 'x'){
        return (parseInt(obj.x) * parseInt(obj.y));
    }else{
        return (parseInt(obj.x) / parseInt(obj.y));
    }
}

app.post('/calc', function(req, res){
    calcSpace.push(req.body);
    console.log(calcSpace);
    calculation = testType(req.body);
    console.log(calculation);
    // res.sendStatus(200);
    res.send(' ' + calculation);
});

// app.get('/calc', function(req, res){
//     res.send(' ' + calculation);
// });

app.listen(port, function(){
    console.log('on server', port);
});