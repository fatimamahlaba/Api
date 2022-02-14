const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

require('dotenv').config();


router.get('/', (req, res) => res.send({ msg: "Send contact using POST"}));

router.post('/', (req, res) =>{
    console.log(process.env.EMAIL)
const {name,email,message} = req.body
    var transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS
        }
      });
      
      var mailOptions = {
        from: email,
        to: 'fatimamahlaba@gmail.com',
        bcc: process.env.BCC,
        subject: 'Sending Email using Node.js',
        text: `${name} has messaged you, saying:
        
        ${message}`,

        
      };
      transporter.verify((error, success) => {
        if (error){
          console.log(error);
        }
      });
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.status(400).send({ msg: "Email could not be sent"})
        } else {
          console.log('Email sent: ' + info.response);
          res.send({ msg: "Message sent successfully"});
        }
      })
});


module.exports = router