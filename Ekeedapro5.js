let screen = document.getElementById("input");
buttons=document.querySelectorAll("button")
let screenVal='';
for (item of buttons) {
  item.addEventListener("click", (e) => {
      buttonText = e.target.innerText;
      if (buttonText == "C"){
          screenVal = "";
          screen.value = screenVal;
      }
      else if (buttonText == "*"){
          screen.value += buttonText;
          screenVal = screen.value;
      }
      else if (buttonText == "="){
          screen.value = eval(screenVal);
          screenVal = "";
      }
      else if (buttonText){
          screen.value += buttonText;
          screenVal = screen.value;
      }   
  })
}
document.addEventListener("keydown", (e) => {
  // console.log(e.key);
  // console.log(e.keyCode)
  if (e.key == "+" ||
      e.key == "-" ||
      e.key == "*" ||
      e.key == "." ||
      e.key == "/" ||
      e.key == "%" ||
      e.key == "(" ||
      e.key == ")" ||
      e.key <= 9)
      screenVal += e.key;
      screen.value = screenVal;
})