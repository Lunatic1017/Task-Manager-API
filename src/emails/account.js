const sgmail = require('@sendgrid/mail')

sgmail.setApiKey(process.env.SENDGRID_API_KEY)

const SendWelcomeEmail = (email , name) => {
    sgmail.send({
        to : email ,
        from : 'gadiadeepanshu@gmail.com' ,
        subject : 'Welcome to the Task manager app',
        text : `Welcome to the app, ${name}. Let me know how you feel about the app.`
    })
}

const SendExitEmail = (email , name) => {
    sgmail.send({
        to : email ,
        from : 'gadiadeepanshu@gmail.com' ,
        subject : 'Thanks for using the app' ,
        text : `Thanks for using the app, ${name}. Let us know if you have any suggestions for us.`
    })
}

module.exports = {
    SendWelcomeEmail ,
    SendExitEmail
}