const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

require('dotenv').config();


router.get('/', (req, res) => res.send({ msg: "Send contact using POST"}));

router.post('/', (req, res) =>{
    console.log(process.env.EMAIL)
const {name,email,message} = req.body
    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS
        }
      });
      
      var mailOptions = {
        from: email,
        to: 'fatimamahlaba@gmail.com',
        subject: 'Sending Email using Node.js',
        text: `${name} has messaged you, saying:
        
        ${message}`,

        
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.status(400).send({ msg: "Email could not be sent"})
        } else {
          console.log('Email sent: ' + info.response);
          res.send({ msg: "Message sent successfully"});
        }
      });
});


module.exports = router;