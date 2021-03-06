// Char at index
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
 
let charactersAllowed = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]



let passwordLength = getLength()
let passwordElOne = document.getElementById("password-el-one")
let passwordElTwo = document.getElementById("password-el-two")
let symbolsAllowed = false
let numbersAllowed = false


function getLength(){
    let select = document.getElementById('password-length');
    let value = select.options[select.selectedIndex].value;
    return value
}


function toggleSymbols(){
    // symbolsAllowed = symbolsAllowed ? false : true;
    symbolsAllowed = !symbolsAllowed

}

function toggleNumbers(){
    numbersAllowed = numbersAllowed ? false : true;

}


function addSymbols(){
    if (charactersAllowed.length === 52 && symbolsAllowed === true){
        charactersAllowed.push(...symbols)
        }
    else if(charactersAllowed.length === 62 && symbolsAllowed === true){
            charactersAllowed.push(...symbols)
        }
    else if(charactersAllowed.length > 52 && symbolsAllowed === false){
            charactersAllowed = charactersAllowed.filter( function( el ) {
            return symbols.indexOf( el ) < 0;
          } );
}
}


function addNumbers(){
    if (charactersAllowed.length === 52 && numbersAllowed === true){
            charactersAllowed.push(...numbers)
        }else if(charactersAllowed.length === 81 && numbersAllowed === true){
            charactersAllowed.push(...numbers)
        }else if(charactersAllowed.length > 52 && numbersAllowed === false){
            charactersAllowed = charactersAllowed.filter( function( el ) {
            return numbers.indexOf( el ) < 0;
          } );
}
}



function assignPassword(){
    passwordElOne.textContent = generateRandomPassword()
    passwordElTwo.textContent = generateRandomPassword()
}

function generateRandomPassword(){
    let passwordLength = getLength()
    addNumbers()
    addSymbols()
        let generatedPassword = ""
        for(let i = 0; i < passwordLength; i++){
            if(generatedPassword.length < passwordLength){
                generatedPassword += charactersAllowed[randomIndex()]
            }else if(generatedPassword.length === passwordLength){
                generateRandomPassword()
            }
        }
        return generatedPassword
}


function randomIndex(){
    let rndmIndex = Math.floor(Math.random()*charactersAllowed.length)
    return rndmIndex
}

function copyOnClick(element){
    let copyText = element.textContent
    navigator.clipboard.writeText(copyText)
}
