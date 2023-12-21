
let contactForm = document.querySelector("#contactForm") // our contact form

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let firstName = document.querySelector("#firstName"); // user's first name
    let lastName = document.querySelector("#lastName"); // user's last name
    if (firstName.value == "" || lastName.value == "") // make sure name fields aren't empty
        console.log("ERROR - name fields cannot be empty.")
    let emailAddress = document.querySelector("#emailAddress"); // user's email address
    if (emailAddress.value == "") // make sure email field isn't empty
        console.log("ERROR - email field cannot be empty.")
    let MESSAGE = document.querySelector("#messageContent"); // user's email message
    if (MESSAGE.value == "") // make sure msg field isn't empty
        console.log("ERROR - message can't be empty.")
})