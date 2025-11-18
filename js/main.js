document
  .querySelector("#hotspotSok")
  .addEventListener("mouseover", mouseOverFoot);
document
  .querySelector("#hotspotSok")
  .addEventListener("mouseout", mouseOutFoot);

document.querySelector("#hotspotSok").addEventListener("click", clickFoot);

function mouseOverFoot() {
  console.log("mouseOverFoot");
  document.querySelector("#hotspotSok").style.fill = "green";
}

function mouseOutFoot() {
  console.log("mouseOutFoot");
  document.querySelector("#hotspotSok").style.fill = "red";
}

function clickFoot() {
  console.log("clickFoot");

  animateBoxes();

  document.querySelector(".info-text >h2").textContent =
    "En ældre dames sokke-redning";

  document.querySelector(".placeholder").textContent =
    "Du sidder der i fred og ro, på tronen som dronningen af badeværelset. Alt går som det skal, indtil du kigger til siden og ser det.... En tom toiletrulle. Et stykke pap og en følelse af forræderi. Men frygt ej! Du er en kvinde af erfaring, opvokset i en tid hvor man klarede sig med, hvad man havde. Og hvad har du nu? En sok. Den gamle uldsok, der alligevel havde set bedre dage, får nu sit livs sidste og vigtigste opgave. Du ser på den med respekt. Den har været med dig gennem mange vintre, og nu skal den igen bringe varme… på sin egen måde. Et hurtigt snuptag, og missionen er fuldført. Papirkrisen er afværget, værdigheden reddet, og du har skrevet endnu et kapitel i bogen 'Hvordan kvinder over 70 overlever alt' ";
  document.querySelector("#efficiency").innerHTML = `<h3>Moral</h3>
  <p>Aldrig undervurdér en sok. Den er måske lille, men i nøden er den stor.</p>`;

  document.querySelector("#requirement").innerHTML = `<h3>Fremover</h3>
  <p>Altid hav sokker på når du skal trykke.</p>`;
}

document
  .querySelector("#hotspotHånd")
  .addEventListener("mouseover", mouseOverHånd);
document
  .querySelector("#hotspotHånd")
  .addEventListener("mouseout", mouseOutHånd);

document.querySelector("#hotspotHånd").addEventListener("click", clickHånd);

function mouseOverHånd() {
  console.log("mouseOverHånd");
  document.querySelector("#hotspotHånd").style.fill = "green";
}

function mouseOutHånd() {
  console.log("mouseOutHånd");
  document.querySelector("#hotspotHånd").style.fill = "red";
}

function clickHånd() {
  console.log("clickHånd");

  animateBoxes();

  document.querySelector(".info-text >h2").textContent = "Håndpapir 2.0";

  document.querySelector(".placeholder").textContent =
    "Du sidder der, majestætisk på porcelænstronen, klar til at afslutte dagens vigtigste meditation. Men ak! Du kigger til højre – intet papir. Til venstre – kun håb og fliser. Så hvad gør en erfaren kvinde? Hun husker sin livserfaring! Du har overlevet papirkriser, oliekriser og svigermødre – en tom toiletrulle stopper dig ikke! Derfor, kære dame, må hånden (den ædle allierede, der har strikket, bagt og klappet børnebørn) nu træde til i nødens stund. Den bliver dit midlertidige redskab, din trofaste hjælper, din… “håndpapir 2.0”. Bare rolig – du har sæbe, varmt vand og værdigheden i behold. For en sand dame mister aldrig fatningen – selv ikke, når papiret gør det.";
  document.querySelector("#efficiency").innerHTML = `<h3>Moral</h3>
  <p>Når livet tager dit papir, så brug det, du stadig har ved hånden.
For en ægte dame mister aldrig grebet – heller ikke på toilettet.</p>`;

  document.querySelector("#requirement").innerHTML = `<h3>Fremover</h3>
  <p>Brug hånden til så meget du kan i livet.</p>`;
}

document.querySelector("#hotspotUr").addEventListener("mouseover", mouseOverUr);
document.querySelector("#hotspotUr").addEventListener("mouseout", mouseOutUr);

document.querySelector("#hotspotUr").addEventListener("click", clickUr);

function mouseOverUr() {
  console.log("mouseOverUr");
  document.querySelector("#hotspotUr").style.fill = "green";
}

function mouseOutUr() {
  console.log("mouseOutUr");
  document.querySelector("#hotspotUr").style.fill = "red";
}

function clickUr() {
  console.log("clickUr");

  animateBoxes();

  document.querySelector(".info-text >h2").textContent =
    "Tålmodighed bliver din bedste ven";

  document.querySelector(".placeholder").textContent =
    "Du sidder der i din royale stilling, og opdager katastrofen: Rullen er tom. Intet papir i sigte. Ikke engang en ensom serviet fra sidste julefrokost. Men du er ikke en, der går i panik. Du har levet længe nok til at vide, at alt i livet ordner sig… med tiden. Så du tager en dyb indånding, retter ryggen og tænker: “Så må vi jo… vente.” Minutterne går. Avisen bliver læst (igen). Du overvejer sudoku, eller måske bare at meditere over dine livsvalg. Og til sidst – naturen har gjort sit. Tørretid: gennemført. Mission: fuldført. Uden papir, men med værdighed (og lidt stædighed).";
  document.querySelector("#efficiency").innerHTML = `<h3>Moral</h3>
  <p>Tålmodighed er en dyd – især når der ikke er mere papir.
For selv naturen hjælper den, der kan vente.</p>`;

  document.querySelector("#requirement").innerHTML = `<h3>Fremover</h3>
  <p>Tag dig god tid når du skal på toilet</p>`;
}

function animateBoxes() {
  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");

  document
    .querySelector("#requirement")
    .addEventListener("animationend", cleanup);
}

function cleanup() {
  console.log("cleanup");
  document
    .querySelector("#requirement")
    .removeEventListener("animationend", cleanup);
  document.querySelector("#requirement").classList.remove("fadeIn");
  document.querySelector("#efficiency").classList.remove("fadeIn");
}
