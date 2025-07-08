//seleção de eventos
const multiForm = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#number2") 
const multiplicationTable = document.querySelector("#multi-operations")
//funções
const createTable = (number, multiplicatorNumber) => {
  multiplicationTable.innerHTML = ""

  for (i = 1; i <= multiplicatorNumber; i++){
    const result = number * i
    console.log(result);

    const template =
    `<div id="row" >
      <div id="operations">${number} x ${i} = </div>
      <div id="result">${result}</div>
    </div>
    `
    const parser = new DOMParser()
    const htmlTemplate = parser.parseFromString(template, "text/html")
    const row =htmlTemplate.querySelector("#row")
    multiplicationTable.appendChild(row)
  }
}
//eventos
multiForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const number = numberInput.value
  const multiplicatorNumber = multiplicationInput.value

  if (!number || !multiplicatorNumber)return

  console.log(number);
  console.log(multiplicatorNumber);
  console.log(number*multiplicatorNumber);
  
  createTable(number,multiplicatorNumber)
  

  
})