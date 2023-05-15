// Afficher / masquer le menu
const menuBurger = document.querySelector(".menu-burger");//selection du bouton menu
const navLinks = document.querySelector(".nav-links");//selection de l'affichage du menu
const visit = document.querySelector('#visit');//selection du block vues

const menuLinks = document.querySelector('.btn-logo');//selection du bouton de la photo
const showLinks = document.querySelector('.links');//selection de la section réseaux 

//selection des card-formations en bouton
const btnInfoCard1 = document.querySelector('.btn-info-card1');
const btnInfoCard2 = document.querySelector('.btn-info-card2');
const btnInfoCard3 = document.querySelector('.btn-info-card3');
const btnInfoCard4 = document.querySelector('.btn-info-card4');
//selection des bloc infos formations
const infoCard1 = document.querySelector('.info-card1');
const infoCard2 = document.querySelector('.info-card2');
const infoCard3 = document.querySelector('.info-card3');
const infoCard4 = document.querySelector('.info-card4');


menuBurger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu');
    //afficher cacher le compteur de vues quand le nav link est affiché ou cahcé
    if(visit.style.display == "none") {
        visit.style.display = 'block';

    } else {
        visit.style.display = 'none';
    }
    if(document.getElementById('menu-burger')){}
});
navLinks.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
    if(visit.style.display == "block") {
        visit.style.display = 'none';
    } else {
        visit.style.display = 'block';
    }

});

// Afficher / Masquer les réseaux
menuLinks.addEventListener('click', () =>{
    showLinks.classList.toggle('mobile-links');
});
showLinks.addEventListener('click', () =>{
    showLinks.classList.toggle('mobile-links');
});


//afficher ou masquer les infos formations
btnInfoCard1.addEventListener('click', () =>{
    if(infoCard1.style.display == 'flex'){
        infoCard1.style.display = 'none';
    } else {
        infoCard1.style.display = 'flex';
    }
});
btnInfoCard2.addEventListener('click', () =>{
    if(infoCard2.style.display == 'flex'){
        infoCard2.style.display = 'none';
    } else {
        infoCard2.style.display = 'flex';
    }
});
btnInfoCard3.addEventListener('click', () =>{
    if(infoCard3.style.display == 'flex'){
        infoCard3.style.display = 'none';
    } else {
        infoCard3.style.display = 'flex';
    }
});
btnInfoCard4.addEventListener('click', () =>{
    if(infoCard4.style.display == 'flex'){
        infoCard4.style.display = 'none';
    } else {
        infoCard4.style.display = 'flex';
    }
});

//Afichier cacher les sections
function showProfil(){
    document.getElementById('profil').style.display = "flex";//visible
    document.getElementById('competences').style.display = "none";//caché
    document.getElementById('formations').style.display = "none";//caché
    document.getElementById('projets').style.display = "none"//caché
}
function showCompetences(){
    document.getElementById('profil').style.display = "none";
    document.getElementById('competences').style.display = "flex";
    document.getElementById('formations').style.display = "none";
    document.getElementById('projets').style.display = "none";
}
function showFormations(){
    document.getElementById('profil').style.display = "none";
    document.getElementById('competences').style.display = "none";
    document.getElementById('formations').style.display = "flex";
    document.getElementById('projets').style.display = "none"
}
function showProjets(){
    document.getElementById('profil').style.display = "none";
    document.getElementById('competences').style.display = "none";
    document.getElementById('formations').style.display = "none";
    document.getElementById('projets').style.display = "flex"
}



const visitCounter = localStorage.getItem('visitCounter') || 0;
const visitCountElement = document.getElementById('visit-count');
visitCountElement.textContent = visitCounter;

function incrementVisitCounter() {
  const newVisitCounter = parseInt(visitCounter) + 1;// ajoute +1 
  localStorage.setItem('visitCounter', newVisitCounter);
  visitCountElement.textContent = newVisitCounter;//affiche le resultat
}

window.onload = incrementVisitCounter;//incrémentation lors d'un chargement de page affiché
