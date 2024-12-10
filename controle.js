// Sélection des éléments du formulaire
const prenom = document.getElementById('Prenom');
const nom = document.getElementById('nom');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const confirmPass = document.getElementById('Confirmpass');
const genre = document.getElementsByName('Genre');
const pays = document.getElementById('pays');
const btn = document.getElementById('btn');
btn.addEventListener("click", verif);
function verif() {
    clearErrors();
    let hasError = false;
    if (prenom.value.trim() === "") {
        showError(prenom, "Erreur : Prénom requis.");
        hasError = true;
    }
    if (nom.value.trim() === "") {
        showError(nom, "Erreur : Nom requis.");
        hasError = true;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        showError(email, "Erreur : Email invalide.");
        hasError = true;
    }
    if (pass.value.trim() === "") {
        showError(pass, "Erreur : Mot de passe requis.");
        hasError = true;
    }
    if (confirmPass.value.trim() === "") {
        showError(confirmPass, "Erreur : Confirmation requise.");
        hasError = true;
    } else if (pass.value !== confirmPass.value) {
        showError(confirmPass, "Erreur : Les mots de passe ne correspondent pas.");
        hasError = true;
    }
    if (![...genre].some(radio => radio.checked)) {
        showError(genre[0], "Erreur : Genre requis.");
        hasError = true;
    }
    if (pays.value.trim() === "") {
        showError(pays, "Erreur : Pays requis.");
        hasError = true;
    }
    if (!hasError) {
        alert("Inscription réussie !");
    }
}
function showError(inputField, message) {
    const errorMessage = document.createElement("p");
    errorMessage.style.color = "red";
    errorMessage.textContent = message;
    if (inputField.type === "radio") {
        inputField.parentNode.parentNode.appendChild(errorMessage);
    } else {
        inputField.parentNode.insertBefore(errorMessage, inputField.nextSibling);
    }
}
function clearErrors() {
    const errorMessages = document.querySelectorAll("p");
    errorMessages.forEach(message => message.remove());
}
