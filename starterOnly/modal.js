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
const listFormData = document.querySelectorAll(".formData");
const form = document.querySelector('form[name="reserve"]');
const exitButton = document.querySelector(".close");
const modalBody = document.querySelector(".modal-body");
const checkConditions = document.querySelector('.checkbox1');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//Exit modal form
exitButton.addEventListener("click", exitModal);

function exitModal(){
  modalbg.style.display = "none";
}

//Checkbox CGU checked
function conditionsdChecked(){
  if(checkConditions.onclick == false){
    return alert("Veuillez cocher les conditions d'utilisations");
  }
}

// Click behind modal to close modal


//submit modal
form.addEventListener('submit', function (event) {
  event.preventDefault();

   if (this.reportValidity()) {
    form.style.display = "none";
    modalBody.innerHTML = "<p>Merci ! Votre réservation a été reçue.</p>"
   } else {
     alert("Veuillez réessayer");
   }
    });





//*setcustomvalidity*//