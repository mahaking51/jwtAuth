require('dotenv').config();
const express = require('express');
const app = express();
const jwt =require('jsonwebtoken');
app.use(express.json());
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


app.get('/',auth,function(req,res){
res.json(userDet.filter(det => det.username === req.user.name && det.password===req.user.pwd));
})
app.post('/login',function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    user={
        name:username,
        pwd:password
    }
    const accessToken=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET);
    res.json({accessToken:accessToken})
})


function auth(req,res,next){
const header = req.headers['authorization'];
const tkn=header && header.split(' ')[1];
if(tkn==null){
return res.sendStatus(401)
}
jwt.verify(tkn,process.env.ACCESS_TOKEN_SECRET,function(err,user){
    if(err){
        res.sendStatus(403);
    }
    else{
        req.user=user;
        next();
    }
})

}
app.listen(3000,function() {
    console.log('server started on port 3000');
})