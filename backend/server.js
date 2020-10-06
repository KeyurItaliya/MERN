var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors');
var crypto = require('crypto');
const User = require('./models/user.model');
var mailer = require('./controller/mail.js');
require('./models/db');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

// mailer.sendMail();

var key="password";
var algo='aes256';

var jsonParser = bodyParser.json()
//
const jwt = require("jsonwebtoken");
const jwtkey ="jwt"
//
//middleware
app.use(cors())
app.use(express.json());

bodyParser.urlencoded({ extended: true })
var router = express.Router();

    //get api 
    app.get("/users",verifyToken, (req, res) => {
        User.find().then((data)=>{
            res.status(200).json(data) 
        })
    });
    // middleware 
    function verifyToken(req, res, next){
        const bearHeader = req.headers['authorization'];
        if(typeof bearHeader !== 'undefined'){
            req.token=bearHeader;
            jwt.verify(req.token,jwtkey, (err, authData) => {
                if(err){
                    res.json({result: err})
                }else{
                    next()
                }
            })
        }else{
            res.send({"result": "Token is not provided"})
        }
    }

//post api
router.post("/register", jsonParser, (req, res, next) => {
    var cipher = crypto.createCipher(algo,key);
    var encryptted = cipher.update(req.body.password,'utf8','hex')
    +cipher.final('hex')
    console.warn(req.body,encryptted)
    //  console.log(JSON.stringify(user))

    const data = new User({
        username: req.body.username,
        password: encryptted,
        address : req.body.address,
        Mobile : req.body.Mobile
    })
    
    data.save().then((result)=> {
        jwt.sign({result}, jwtkey, {expiresIn: '7d'}, (err, token) => {
            res.json({token})
        })
        // res.json(result)
    }).catch(err=> console.warn(err))
});

app.post("/login",jsonParser, (req, res, next) => {
    User.findOne({username:req.body.username}).then((data)=>{
        var decipher = crypto.createDecipher(algo,key);
        var decryptted = decipher.update(data.password,'hex','utf8')
        +decipher.final('utf8');
        if(decryptted == req.body.password){
            jwt.sign({data}, jwtkey, {expiresIn: '1d'}, (err, token) => {
                res.status(201).json({token})
            })
        }
    }).catch(err=> console.warn(err))
});

// app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", router);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


// const data = new User({
//     username: "italiya",
//     password: "123456",
//     address : "Surat",
//     Mobile : "8140601664"
// })

// data.save().then((result)=> {
//     console.warn(result)
// }).catch(err=> console.warn(err))

/*
User.find({}, function(err, users){
    if(err){
        console.warn(err)
    }else{
        console.warn(users)
    }
})
*/