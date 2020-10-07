

import gererator from "generate-password";

const Output = document.querySelector("#output");
const generatePasswordBtn = document.querySelector("button");
const variables = document.querySelectorAll(".variables");
const lengthInput = variables[0]
const variableArr = Array.from(variables) 
variableArr.splice(0,1)


// add to clipboard function to el 
Output.addEventListener('click', (e) => {
    toClipboard(e)
})

let passwordObj = {
  length   : 10,
  numbers  : true,
  symbols  : false,
  uppercase: true,
  lowercase: false
}


document.addEventListener("DOMContentLoaded", () => {
    updatePassword(passwordObj)  
});

generatePasswordBtn.addEventListener("click", () => {
  updatePassword(passwordObj)
});

// get current value of range and output

lengthInput.addEventListener('change', (e) => {
  console.log(e.target.value)
  const newPasswordObj = updatePasswordObj(e.target.name, e.target.value)
  updatePassword(newPasswordObj)
})

variableArr.forEach((v, i) => {
  const checkBox = v.querySelector("[type='checkbox']");
  // add change event listener
  checkBox.addEventListener("click", (e) => {
    console.log(e.target.checked);
    console.log(e.target.name)
    
    const newPasswordObj = updatePasswordObj(e.target.name, e.target.checked)
    updatePassword(newPasswordObj)
  });
});

// update password object on change
function updatePasswordObj(name, value){
    passwordObj[name] = value;
   return  passwordObj;
}

// generate new password
function generateNewPassword(Obj) {
  return gererator.generate(Obj);
}

function updatePassword(Obj){
  // check at least one true value 
  let valid = false 
  for(const props in Obj){
    if(Obj[props] === true){
      valid = true
    }
  }
  if(valid){    
    Output.innerHTML = generateNewPassword(Obj)
  } else {
    const errorMessage = document.createElement('div')
    errorMessage.setAttribute('class', 'error-message')
    errorMessage.innerText = `Password must have at least one property selected`
    Output.appendChild(errorMessage)
  } 
}



function toClipboard(e) {
    let range = document.createRange()
    range.selectNode(e.target)
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    // newPermute.setSelectionRange(0, 100);
    document.execCommand("copy");
    console.log("target", e.target);
    window.getSelection().removeAllRanges();
}
