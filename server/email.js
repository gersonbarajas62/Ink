module.exports.email = (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Comments</h3>
    <p>${req.body.message}</p>
    <h3>Tattoo location</h3>
    <p>${req.body.bodyPart}</p>
    <h3>Date of Appointment</h3>
    <p>${req.body.date}</p>
      `
    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port:587,
      auth: {
        user: '	monica.hudson89@ethereal.email',//change this email
        pass: 'KmCmxq41pwa78k9KgY'//change password
      }
    })
    
    let mailOptions = {
      from: 'test@testaccount.com',
      to: '	monica.hudson89@ethereal.email',//use same email
      replyTo: 'test@testaccount.com',
      subject: 'New Message',
      text: req.body.message,
      html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err)
      }
      console.log('Mssage sent: %s', info.message)
      console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
    })
  })
}