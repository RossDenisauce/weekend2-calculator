const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 9000;

var calculation;

let calcSpace = [];

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

// class Expression{
//     constructor(xIn, yIn, typeIn){
//         this.x = xIn;
//         this.y = yIn;
//         this.type = typeIn;
//     }
//     addExpression(){
//         return parseInt(this.x) + parseInt(this.y);
//     }
//     subtractExpression(){
//         return this.x - this.y;
//     }
//     multiplyExpression(){
//         return this.x * this.y;
//     }
//     divideExpression(){
//         return this.x / this.y;
//     }
// }

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

// function displayCalcSpace(){
//     for (let i = 0; i < calcSpace.length; i++) {
//         element = calcSpace[i];
        
//     }
// }

app.post('/calc', function(req, res){
    calcSpace.push(req.body);
    console.log(calcSpace);
    calculation = testType(req.body);
    console.log(calculation);
    res.sendStatus(200);
});

app.get('/calc', function(req, res){
    console.log(calculation);
    res.send(' ' + calculation);
});

app.listen(port, function(){
    console.log('on server', port);
});