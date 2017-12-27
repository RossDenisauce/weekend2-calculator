const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 9000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

class Expression{
    constructor(xIn, yIn, typeIn){
        this.x = xIn;
        this.y = yIn;
        this.type = typeIn;
    }
    addExpression(){
        return parseInt(this.x) + parseInt(this.y);
    }
    subtractExpression(){
        return this.x - this.y;
    }
    multiplyExpression(){
        return this.x * this.y;
    }
    divideExpression(){
        return this.x / this.y;
    }
}

app.listen(port, function(){
    console.log('on server', port);
});