console.log("Le fichier auth.js est bien chargé !");

function validerConnexion(event) {
    if (event) event.preventDefault();
    
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const messageErreur = document.getElementById('messageErreur');

    if (!emailField || !passwordField) {
        console.error("Champs introuvables. Vérifiez les IDs dans le HTML.");
        return;
    }

    const emailTape = emailField.value.trim(); 
    const passTape = passwordField.value.trim();

    console.log("Tentative de connexion en cours...");

    if (emailTape === "admin@app.com" && passTape === "admin123") {
        console.log("Succès ! Redirection vers l'index.");
        localStorage.setItem('estConnecte', 'true');
        window.location.href = "index.html"; 
    } else {
        console.log("Identifiants incorrects.");
        if (messageErreur) {
            messageErreur.style.display = "block";
        } else {
            alert("Erreur : admin@app.com / admin123");
        }
    }
}
function verifierAcces() {
    if (localStorage.getItem('estConnecte') !== 'true') {
        window.location.href = "login.html";
    }
}