const characterAmountRange = document.getElementById("characterAmountRange")

const characterAmountNumber = document.getElementById("characterAmountNumber")
const form = document.getElementById("characterAmountRange")
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')

characterAmountNumber.addEventListener("input", syncCharacterAmount)
characterAmountRange.addEventListener("input", syncCharacterAmount)

form.addEventListener('submit', e=> {
  e.preventDefault()
  const password = generatePassword(characterAmountNumber, characterAmountRange,  includeNumbers, includeSymbols, includeUppercase,)
  const characterAmount = characterAmountNumber.value
}

function generatePassword(characterAmount, includeNumbers, includeSymbols, includeUppercase) {
  ["a". "b", "c", "d", "e", "f", "g", "h", "y", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",]
  
}

function syncCharacterAmount(e) {
  const value = e.target.value;
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSymbols = includeSymbolsElement.checked
  characterAmountNumber.value = value;
  characterAmountRange.value = value;
}
