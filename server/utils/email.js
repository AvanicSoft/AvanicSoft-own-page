
const nodemailer = require('nodemailer')

function createTransporter(){
    if(!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD){
        throw new Error('GMAIL_USER AND GMAIL_APP_PASSWORD must be set')
    }
    return nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user:process.env.GMAIL_USER,
            pass:process.env.GMAIL_APP_PASSWORD,
        }
    })
}

async function sendEmail({ subject,to ,html,text,replyTo }) {
    const transporter = createTransporter()
    const from = `"Avanic" <${process.env.GMAIL_USER}>`
    const mailoptions = {
        from,
        to: to || process.env.GMAIL_USER,
        subject,
        html,
        text,
        replyTo, 
    }

    try {
        await transporter.verify();
    }catch(err){
        console.error("Transporter verify failed:", err.message)
    }

    const info = await transporter.sendMail(mailoptions);
    return info;

}

module.exports = {
    sendEmail
}