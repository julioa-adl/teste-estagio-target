const inverterCaracrtes = (caracter) => {
    const arrayDeCaracter = []
    for (let i = 0; i <= caracter.length; i += 1) {
        arrayDeCaracter.push(caracter[caracter.length - i])
    }
    const result = arrayDeCaracter.join("");
    return result;
}

console.log(inverterCaracrtes("Eu me chamo Júlio")) //saída: oilúJ omahc em uE