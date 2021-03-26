/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function validate(event) {
  event.preventDefault();
  var cardNumber = document.querySelector("#inputCardNumber");
  var amount = document.querySelector("#inputAmount");
  var firstname = document.querySelector("#inputFirstName");
  var lastname = document.querySelector("#inputLastName");
  var state = document.querySelector("#inputState");
  var zip = document.querySelector("#inputZip");

  if (cardNumber.value.length < 16) {
  }

  console.log("cardNumber", cardNumber);
  console.log("cardNumber.value", cardNumber.value);
  console.log("cardNumber.value.length", cardNumber.value);
}

document.querySelector("#theForm").addEventListener("submit", validate);
