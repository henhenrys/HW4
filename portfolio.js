function logSubmit(event) {
    event.preventDefault()
    const fname = document.getElementById("fname");
    const email = document.getElementById("email");
    const comments = document.getElementById("comments")
    form.elements["info"].value = "Successfully submitted"
}

const form = document.getElementById("contact_form")
form.addEventListener("submit", logSubmit);