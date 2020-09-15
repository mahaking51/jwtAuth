const express = require('express');
const app = express();
const jwt =require('jsonwebtoken')
const userDet=[
    {
        username:'Maharajan',
        password:'1234Maha'
    },
    {
        username:'Karthik',
        password:'1234Karthik'
    },
    {
        username:'Raj',
        password:'1234Raj'
    }
]


app.get('/',function(req,res){

})

app.listen(3000,function() {
    console.log('server started on port 3000');
})