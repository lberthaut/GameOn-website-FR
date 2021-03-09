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
function conditionsChecked(){
  if(checkConditions.checked == false){
    alert("Veuillez cocher les conditions d'utilisations");
    return false;
  }
  return true;
}

// Checkbox city required
function cityChecked(){
  let listLocation = document.querySelectorAll('[name="location"]:checked');
  if(listLocation.length != 1){
    alert("Veuillez cocher au moins une ville");
    return false;
  }
  return true;
}



//submit modal
form.addEventListener('submit', function (event) {
  event.preventDefault();

   if (this.reportValidity() && cityChecked() && conditionsChecked()) {
    form.style.display = "none";
    modalBody.innerHTML = "<p>Merci ! Votre réservation a été reçue.</p>"
   }
    });





//*setcustomvalidity*//