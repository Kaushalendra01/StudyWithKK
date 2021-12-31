const btns = document.querySelector('#button')
const input = document.querySelector('.php-email-form')
btns.addEventListener('click', () => {

    const name = (input.elements["name"].value).trim()
    const email = (input.elements["email"].value).trim()
    const subject = (input.elements["subject"].value).trim()
    const msg = (input.elements["message"].value).trim()
    if (!name.length > 0 || !email.length > 0 || !subject.length > 0 || !msg.length > 0) {
        alert("All fields are mandatory")
        return
    }
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "2ba6aa2694c2c1",
        Password: "4d550d8f22b081",
        To: "studywithkk@gmail.com",
        From: input.elements["email"].value,
        Subject: "Contact Us Query By the Customer",
        Body: name + "<br>" + "<br>" + email + "<br>" + "<br>" + subject + "<br>" + "<br>" + msg
    }).then(msg => alert("The email successfully sent"))
})