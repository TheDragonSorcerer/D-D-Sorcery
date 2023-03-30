var d20 = document.getElementById('d20');
var d12 = document.getElementById('d12');
var d10 = document.getElementById('d10');
var d8 = document.getElementById('d8');
var d6 = document.getElementById('d6');
var d4 = document.getElementById('d4');
var box = document.getElementById('diceTypes');
var howManyD20 = 0;
var howManyD10 = 0;
var howManyD8 = 0;
var howManyD6 = 0;
var howManyD4 = 0

d20.onclick = function () {
  //var dice20 = document.createElement("div");
  //dice20.innerText = '1d20';
  //box.append(dice20);
  howManyD20++;
  alert(Math.floor(Math.random());
  
}
d10.onclick = function () {
  howManyD10++;
  alert('Added 1d10');
}
d8.onclick = function () {
  howManyD8++;
  alert('Added 1d8');
}
d6.onclick = function () {
  howManyD6++;
  alert('Added 1d6');
}
d4.onclick = function () {
  howManyD4++;
  alert('Added 1d4');
}

