if (localStorage.getItem('estConnecte') !== 'true') {
    window.location.href = "login.html";
}

function deconnexion() {
    localStorage.removeItem('estConnecte');
    window.location.href = "login.html";
}

if (!localStorage.getItem('ressources')) {
    const ressourcesInitiales = [
        { id: 1, titre: "Introduction au JavaScript", auteur: "Jean Dupont", categorie: "Informatique" },
        { id: 2, titre: "L'Histoire du Maroc", auteur: "Yassine Alami", categorie: "Histoire" },
        { id: 3, titre: "Gestion de Projet", auteur: "Marie Martin", categorie: "Management" }
    ];
    localStorage.setItem('ressources', JSON.stringify(ressourcesInitiales));
}

function afficherLeTableau(donnees = null) {
    const ressources = donnees || JSON.parse(localStorage.getItem('ressources')) || [];
    const corpsTableau = document.getElementById('corpsTableau');
    if (!corpsTableau) return;

    corpsTableau.innerHTML = ""; 
    ressources.forEach((item, index) => {
        corpsTableau.innerHTML += `
            <tr>
                <td>${item.titre}</td>
                <td>${item.auteur}</td>
                <td>${item.categorie || "N/A"}</td>
                <td><button onclick="supprimer(${index})" style="color:#ff4d4d; border:none; background:none; cursor:pointer; font-weight:bold;">Supprimer</button></td>
            </tr>`;
    });
}

function supprimer(index) {
    if(confirm("Voulez-vous vraiment supprimer cet élément ?")) {
        let ressources = JSON.parse(localStorage.getItem('ressources'));
        ressources.splice(index, 1); 
        localStorage.setItem('ressources', JSON.stringify(ressources));
        afficherLeTableau(); 
    }
}

function ajouterRessource() {
    const titre = document.getElementById('nouveauTitre').value;
    const auteur = document.getElementById('nouvelAuteur').value;
    const categorie = document.getElementById('nouvelleCategorie').value;

    if (!titre || !auteur) return alert("Remplissez au moins le titre et l'auteur !");

    let ressources = JSON.parse(localStorage.getItem('ressources')) || [];
    ressources.push({ id: Date.now(), titre, auteur, categorie });
    localStorage.setItem('ressources', JSON.stringify(ressources));

    document.getElementById('nouveauTitre').value = "";
    document.getElementById('nouvelAuteur').value = "";
    document.getElementById('nouvelleCategorie').value = "";
    afficherLeTableau(); 
}

function rechercherRessource() {
    const texteSaisi = document.getElementById('searchBar').value.toLowerCase();
    const ressources = JSON.parse(localStorage.getItem('ressources')) || [];
    const resultats = ressources.filter(item => 
        item.titre.toLowerCase().includes(texteSaisi) || 
        item.auteur.toLowerCase().includes(texteSaisi)
    );
    afficherLeTableau(resultats);
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('corpsTableau')) {
        afficherLeTableau();
    }

    const searchBar = document.getElementById('searchBar');
    if (searchBar) {
        searchBar.addEventListener('input', rechercherRessource);
    }

    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }

    const barCtx = document.getElementById('monGraphique');
    if (barCtx) {
        new Chart(barCtx, { type: 'bar', data: { labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai'], datasets: [{ label: 'Visites', data: [120, 190, 300, 250, 400], backgroundColor: '#6366f1' }] } });
    }

    const pieCtx = document.getElementById('chartPie');
    if (pieCtx) {
        new Chart(pieCtx, { type: 'pie', data: { labels: ['Livres', 'Articles', 'Vidéos'], datasets: [{ data: [30, 50, 20], backgroundColor: ['#6366f1', '#10b981', '#f43f5e'] }] } });
    }
    
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}