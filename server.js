const express = require ('express')
const app =express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;


app.use(express.urlencoded())
app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/', (req, res)=>{
    console.log(req.body)
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user: 'contatojoanalinhares@gmail.com',
            pass:'josilva1706'
        }
    
    })
    const mailOptions={
        from:req.body.email,
        to:'contatojoanalinhares@gmail.com',
        subect:`Messsage from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }
    transporter.sendMail(mailOptions,(error, info)=>{
        if(erro){
            console.log(error);
            res.send('error');
        }else{
            console.log('Email enviado:' + info.response);
            res.send('success')
        }
    })

})

app.listen(PORT, () =>{
    console.log('Server running on port ${PORT}' + PORT)
})