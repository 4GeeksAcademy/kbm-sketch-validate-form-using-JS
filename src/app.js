import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
   const form = document.getElementById("myForm");
   const alertField = document.getElementById("alert-form");


  form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
      event.preventDefault(); 
      event.stopPropagation();
      

       form.classList.add("was-validated");
       alertField.classList.remove("d-none");
    }
       else {
      alertField.classList.add("d-none"); // Hid
     }
  });
};
