let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A

//const varATemp = varA; 
//varA = varB; 
//varB = varC;
//varC = varATemp;
// oooouu 

[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC);