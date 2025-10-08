const promptNum = +prompt("set number from 100 to 999");

if(isNaN(promptNum)){
throw new Error("zalupa")
}

if (promptNum < 100 || promptNum > 999){
    throw new Error("zalupa")
}

const strNun = `${promptNum}`
 const finalAnswer=`${strNun.at(-1)} ${strNun.at(1)} ${strNun.at(0)}`

alert(finalAnswer)

console.log (finalAnswer)
