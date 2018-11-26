function openSettings() {
  document.getElementById("settingsID").style.width = "100%";
}

function exitSettings() {
  document.getElementById("settingsID").style.width = "0";
}

function openSend() {
  document.getElementById("sendID").style.height = "100%";
}

function exitSend() {
  document.getElementById("sendID").style.height = "0";
}

function dropColorOptions() {
  document.getElementById("ddc").style.display = "block";
}

function colorBlue() {
  document.getElementById("color_value").innerHTML = "Blue";
  document.getElementById("ddc").style.display = "none";
}

function colorRed() {
  document.getElementById("color_value").innerHTML = "Red";
  document.getElementById("ddc").style.display = "none";
}
function colorYellow() {
  document.getElementById("color_value").innerHTML = "Yellow";
  document.getElementById("ddc").style.display = "none";
}
function colorGreen() {
  document.getElementById("color_value").innerHTML = "Green";
  document.getElementById("ddc").style.display = "none";
}

function dropRhythymOptions() {
  document.getElementById("ddr").style.display = "block";
}

var rhythym = document.getElementById("owl");

function rhythym1() {
  document.getElementById("rhythym_value").innerHTML = "Barred Owl Rhythym";
  document.getElementById("ddr").style.display = "none";
  rhythym = document.getElementById("owl");
}

function rhythym2() {
  document.getElementById("rhythym_value").innerHTML = "Cardinal Bird Rhythym";
  document.getElementById("ddr").style.display = "none";
  rhythym = document.getElementById("cardinal");
}

function rhythym3() {
  document.getElementById("rhythym_value").innerHTML = "Cartoon Bird Rhythym";
  document.getElementById("ddr").style.display = "none";
  rhythym = document.getElementById("cartoon");
}

function rhythym4() {
  document.getElementById("rhythym_value").innerHTML = "Hawk Rhythym";
  document.getElementById("ddr").style.display = "none";
  rhythym = document.getElementById("hawk");
}

function playRhythym() {
  rhythym.play();
}
