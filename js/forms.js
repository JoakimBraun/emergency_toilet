// ***************************************************************************
// Slider kode
// ***************************************************************************

// have fat i slideren
const slider = document.querySelector("#farlighed");
const dangerValue = document.querySelector("#range-value");

// sæt en eventlistener på den som opdaterer, når jeg laver ændringer
slider.addEventListener("input", updateValue);

function updateValue() {
  // min span skal opdate sin value (textContent)
  dangerValue.textContent = slider.value;

  if (slider.value > 49 && slider.value < 90) {
    slider.classList = "slider-color-warning ";
  } else if (slider.value >= 90) {
    slider.classList = "slider-color-danger ";
  } else {
    slider.classList = "slider-color-info ";
  }
}

// ***************************************************************************
// Summary kode
// ***************************************************************************

// Eventlistner på "Godkend og luk" knappen
document.querySelector("#reset_btn").addEventListener("click", reset);

// Resetter Formen og skjuler Summary
function reset() {
  document.querySelector("#webform").reset();
  document.querySelector("#sum").style.display = "none";
  updateValue();
}

/*************************** det er her fra og nedefter *****************************/

// skjuler summary fra start
document.querySelector("#sum").style.display = "none";

// variabler til formen og alle de sted vi skal skrive det ud
const form = document.querySelector("#webform");

const sumName = document.querySelector("#sumName");
const sumMail = document.querySelector("#sumMail");
const sumNumber = document.querySelector("#sumNumber");
const sumDate = document.querySelector("#sumDate");
const sumWhat = document.querySelector("#sumWhat");
const sumHow = document.querySelector("#sumHow");
const sumRecomend = document.querySelector("#sumRecomend");

// Eventlistner på form submit
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  // Stoppe default - som vi ikke gør, narmalt vil formen skulle sendes til en server
  e.preventDefault();

  // Viser Summary
  document.querySelector("#sum").style.display = "block";
  // Gemmer dataen i en variabel
  const formData = new FormData(form);

  // Alle under her, læs data og skriv den ud i tilhørende felt

  sumName.textContent = formData.get("fname");
  sumMail.textContent = formData.get("email");

  sumNumber.textContent = formData.get("telefon");

  sumDate.textContent = formData.get("date");
  sumWhat.textContent = formData.get("beskrivelse");
  sumHow.textContent = formData.get("farlighed");

  sumRecomend.textContent = formData.get("amount");
}
// Lidt anderledes, fordi der jo kan være flere checkboxe, list alle sammen, med , imellem
//   sumja.textContent = formData.getAll("amount").join(", ")
// }
