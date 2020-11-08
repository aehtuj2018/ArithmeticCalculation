

const express=require('express');
const app =express();
const calc=require('./arithmeticfunction');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));


app.post('/', function (req, res) {
    res.send('POST request to the homepage');

    var Operation = req.body.Operation;
    var value1 = req.body.value1;
    var value2 = req.body.value2;
    let reult=0;
    let Operation_name='';

    if(Operation=='add')
    {
        Operation_name="Addition";
        result=calc.add(value1,value2);
    }


    if(Operation=='sub')
    {
        Operation_name="Subtraction";
        result=calc.sub(value1,value2);
    }

    if(Operation=='mult')
    {
        Operation_name="Multiplication";
        result=calc.multiply(value1,value2);
    }

    if(Operation=='div')
    {
        Operation_name="Division";
        result=calc.divide(value1,value2);
    }

    console.log("operation"+operation_name);
    console.log("Value 1:"+value1);
    console.log("Value 2:"+value2);
    console.log("Result:"+result);
    
    res.send();

  });





const myModule=require('./myModule');

//console message: display server running 
app.listen(3030, function(){

    console.log('server running on port 3030');
});
