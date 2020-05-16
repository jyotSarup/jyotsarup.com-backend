require('dotenv').config()

const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()

router.post('/', (req, res) => {
    const { name, company, email, subject , body } = req.body
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    let mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: "mail from jyotsarup.com",
        html: `<h1>Name: ${name}</h1> 
                <h2>Company: ${company}</h2>
                <h2>email: ${email}</h2>
                <h2>Subject: ${subject}</h2>
                <h2>message: ${body}</h2>`
    };

    transporter.sendMail(mailOptions)
        .then(info => {
            res.json({ "response": info.response })
        })
        .catch(err => res.json({ "response": "error occured" }))
})

module.exports = router