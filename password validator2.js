const input = document.getElementById('text');
const box = document.querySelectorAll("span");
const stylGreen = "background: rgba(102,255,102, 0.2); border-color: rgb(102,255,102); color: lightgreen;";
const stylRed = "background: rgba(231, 76, 60, 0.2); border-color: #e74c3c; color: #ff3f34;";
const capital = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const special = ['&', '@', '$', '%', '+', '#', '/', '*','.'];
let small = [];
for (let i = 0; i <= 25; i++) {
  let smaller = capital[i].toLowerCase();
  small = [...small, smaller];
}

const inputProcess = () => {
  let c = 0;
  let s = 0;
  let t = 0;

  if (input.value.length >= 8) {
    box[0].style = stylGreen;
  

  if (input.value.length <= 16) {
    box[1].style = stylGreen;
  } 
  else{
    box[1].style= StylRed;
  }
}
  else {
    box[0].style = stylRed;
    box[1].style = stylRed;
  }

  for (let z of input.value) {
    if (z == " ") {
      t++;
    }
    if (special.indexOf(z) !== -1) {
      s++;
    }
    if (number.indexOf(z) !== -1) {
      c++;
    }
  }

  if (c >= 1) {
    box[2].style = stylGreen;
  } else {
    box[2].style = stylRed;
  }

  if (s >= 1) {
    box[3].style = stylGreen;
  } else {
    box[3].style = stylRed;
  }

  if (t >= 1) {
    box[4].style = stylRed;
  } else {
    box[4].style = stylGreen;
  }
}
input.addEventListener("input", inputProcess);
