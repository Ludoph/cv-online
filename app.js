// Afficher / masquer le menu
const menuBurger = document.querySelector(".menu-burger");//selection du bouton menu
const navLinks = document.querySelector(".nav-links");//selection de l'affichage du menu
const visit = document.querySelector('#visit');//selection du block vues
menuBurger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu');
    //afficher cacher le compteur de vues quand le nav link est affiché ou cahcé
    if(visit.style.display == "none") {
        visit.style.display = 'block';
    } else {
        visit.style.display = 'none';
    }
});
navLinks.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
});

// Afficher / Masquer les réseaux
const menuLinks = document.querySelector('.btn-logo');
const showLinks = document.querySelector('.links');

menuLinks.addEventListener('mouseover', () =>{
    showLinks.classList.toggle('mobile-links');
});
showLinks.addEventListener('mouseout', () =>{
    showLinks.classList.toggle('mobile-links');
});

//affichier / Masquer contenu des cards 
const btnInfoCard1 = document.querySelector('.btn-info-card1');
const btnInfoCard2 = document.querySelector('.btn-info-card2');
const btnInfoCard3 = document.querySelector('.btn-info-card3');
const btnInfoCard4 = document.querySelector('.btn-info-card4');
const infoCard1 = document.querySelector('.info-card1');
const infoCard2 = document.querySelector('.info-card2');
const infoCard3 = document.querySelector('.info-card3');
const infoCard4 = document.querySelector('.info-card4');

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





// Cacher le contenu des card formation avec un addEventListener mouse hover in/out  et classList

//addEventListener : mouseover click mouseout mousemove






// //déclaration de la variable qui va stocker l'id compteur
// function incrementeCompteur(){
//     //code de la fonction du compteur 
//     // alert('Nouveau Visiteur !');
//     localStorage.setItem('prenom', '💩') //met en place dans le local storage
    
// }
// function affichePrenom(){
//     let getPrenom = localStorage.getItem('prenom'); //recupere la valeur
//     let spanPrenom = document.querySelector('#prenom'); //selectionne la valeur
//     spanPrenom.textContent = getPrenom; //remplace le contenu par la valeur
// }

// let compteur = document.querySelector('#compteur'); //selection le bouton avec l'id compteur
// compteur.addEventListener("click", incrementeCompteur); //met en place le gestionnaire d'evenement

// let buttonAffiche = document.querySelector("#affiche"); //selectionne le boutton affiche
// buttonAffiche.addEventListener("click", affichePrenom); //ajoute un gestionnaire d'evenement


// function afficheCompteur(){
//     let recup = localStorage.getItem('compteur');
//     let nbClick = document.querySelector('#nbClick');
//     if(recup != null){
//         recup ++;
//         localStorage.setItem('compteur', recup);
//         nbClick.textContent = recup;
//     } else {
//         localStorage.setItem('compteur', 1);
//         nbClick.textContent = 1;
//     }
// }
// compteur.addEventListener('click', afficheCompteur);




//Afichier cacher les sections
function showProfil(){
    document.getElementById('profil').style.display = "flex";
    document.getElementById('competences').style.display = "none";
    document.getElementById('formations').style.display = "none";
    document.getElementById('projets').style.display = "none"
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

