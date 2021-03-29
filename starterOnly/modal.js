function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const form = document.querySelector('form[name="reserve"]');
const exitButton = document.querySelector(".close");
const modalBody = document.querySelector(".modal-body");
const checkConditions = document.querySelector('#checkbox1');


// Ouverture de la modal d'inscription
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.style.display = "block";
}


//Fermeture de la modal via le bouton (X)
exitButton.addEventListener("click", exitModal);

function exitModal(){
  modalbg.style.display = "none";
}


//Fonction de vérification des CGU cochés
function conditionsChecked(){
  if(checkConditions.checked === false){
    alert("Veuillez cocher les conditions d'utilisation");
    return false;
  }
  return true;
}


// Fonction de vérification d'une ville cochée
function cityChecked(){
  let listLocation = document.querySelectorAll('[name="location"]:checked');
  if(listLocation.length !== 1){
    alert("Veuillez sélectionner une ville");
    return false;
  }
  return true;
}


//Vérification des conditions checkbox requises de la modal, puis validation
form.addEventListener('submit', function (event) {
  event.preventDefault();

   if (this.reportValidity() && cityChecked() && conditionsChecked()) {
    form.style.display = "none";
    modalBody.innerHTML = "<p>Merci ! Votre réservation a bien été reçue.</p>"
   }
});