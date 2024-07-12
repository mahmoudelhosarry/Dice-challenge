let x = Math.floor(Math.random() * 7) ;
let y = document.querySelector(".img1");
switch (x) {
  case 1:
    y.src = "dice1.png";
    break;
  case 2:
    y.src = "dice2.png";
    break;
  case 3:
    y.src = "dice3.png";
    break;
  case 4:
    y.src = "dice4.png";
    break;
  case 5:
    y.src = "dice5.png";
    break;
  case 6:
    y.src = "dice6.png";
    break;
  default:
    console.log("Invalid");
    break;
}
let a = Math.floor(Math.random() * 7) ;
let b = document.querySelector(".img2");
switch (a) {
  case 1:
    b.src = "dice1.png";
    break;
  case 2:
    b.src = "dice2.png";
    break;
  case 3:
    b.src = "dice3.png";
    break;
  case 4:
    b.src = "dice4.png";
    break;
  case 5:
    b.src = "dice5.png";
    break;
  case 6:
    b.src = "dice6.png";
    break;
  default:
    console.log("Invalid");
    break;
}
if (x > a) {
  document.querySelector(".mah").innerHTML = "player 1  wins!";
} else if (x < a) {
  document.querySelector(".mah").innerHTML = "player 2 wins!";
} else {
  document.querySelector(".mah").innerHTML = "draw!";
}
