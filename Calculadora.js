window.addEventListener('load',()=>{
  const display = document.querySelector('.display');
  const keypadNumbers = document.getElementsByClassName('keypadN');
  
  const keypadNumbersArray = Array.from(keypadNumbers);

  keypadNumbersArray.forEach( (button) => {
    button.addEventListener('click', () => {
      calculate(button,display);
    })
  }) 
})

function calculate(button, display){
    switch(button.innerHTML){
      case "C":
        deleteDisplay (display);
        break;
      case "=":
          think (display);
          break;
      default:
          refreshDisplay(display,button);
          break
    }
  }

function deleteDisplay(display){
  display.innerHTML = 0;

}

function think(display){
  display.innerHTML = eval(display.innerHTML)
}

function refreshDisplay(display, button){
  if (display.innerHTML == 0){
    display.innerHTML = '';
  }
    display.innerHTML += button.innerHTML;
}