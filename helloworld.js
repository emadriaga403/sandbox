const nameInput = document.getElementById("name");
const secondNameInput = document.getElementById("secondName");
const greetButton = document.getElementById("greetButton");
const spanishButton = document.getElementById("spanishButton");
const yellButton = document.getElementById("yellButton");
const meanButton = document.getElementById("meanButton");   
const messageElement = document.getElementById("message");
const resetButton = document.getElementById("resetButton")
const showButton = document.getElementById("showButton")
const hideButton = document.getElementById("hideButton")

greetButton.addEventListener("click", greetMe);
spanishButton.addEventListener("click", greetInSpanish);
yellButton.addEventListener("click", yellGreeting);
resetButton.addEventListener("click", resetForm);
meanButton.addEventListener("click", meanGreeting)
showButton.addEventListener("click", showClicked)
hideButton.addEventListener("click", hideClicked)

function greetMe() {
    const name = nameInput.value.trim();
    const secondName = secondNameInput.value.trim();

    if (!name) {
        messageElement.textContent = "Please enter a name.";
    } else if (!secondName) {
        messageElement.textContent = "Hello, " + name + ".";
    } else {
        messageElement.textContent = "Hi, " + name + " and " + secondName + ".";
    }
}

function resetForm() {
    messageElement.textContent = "";
    nameInput.value = "";
}

function greetInSpanish() {
    const name = nameInput.value.trim();
    const secondName = secondNameInput.value.trim();

    if (!name) {
        messageElement.textContent = "Please enter a name";
    } else if (!secondName) {
        messageElement.textContent = "¡Hola, " + name + "!";
    } else {
        messageElement.textContent = "¡Hola, " + name + " y " + secondName + "!";
    }
}

function yellGreeting() {
    const name = nameInput.value.trim();
    const secondName = secondNameInput.value.trim();

    if (!name) {
        messageElement.textContent = "ENTER A NAME.";
    } else {
        let greeting = "HELLO, " + name.toUpperCase();
        if (secondName) {
            greeting += " AND " + secondName.toUpperCase();
        }
        greeting += "!";
        messageElement.textContent = greeting;
    }
}

function greetMe() {
    const name = nameInput.value.trim();
    const secondName = secondNameInput.value.trim();

    if (!name) {
        messageElement.textContent = "Please enter a name.";
    } else if (!secondName) {
        messageElement.textContent = "Hello, " + name + ".";
    } else {
        messageElement.textContent = "Hi, " + name + " and " + secondName + ".";
    }
}


function meanGreeting() {
    const name = nameInput.value.trim();
    const secondName = secondNameInput.value.trim();

    if (!name) {
        messageElement.textContent = "ENTER A NAME NOW";
    } else if (!secondName) {
        messageElement.textContent = "YOU STINK " + name.toUpperCase() + ".";
    } else {
        messageElement.textContent = "YOU " + name.toUpperCase() + " AND " + secondName.toUpperCase() + " STINK.";
    }
}

function hideClicked(){
    heading.classlist.add("hide")
}

function showClicked(){
    heading.classlist.remove("hide")
}