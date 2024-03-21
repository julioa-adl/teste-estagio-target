const fibonacci = (initialNum) => {
    const results = [0, 1]
    
    for (let i = 0; results[results.length - 1] < initialNum; i += 1) {
        nextNumber = results[i] + results[i + 1];
        results.push(nextNumber)
    }
    console.log(results)
    if (results.includes(initialNum)) {
        return `O numero ${initialNum} pertence a sequencia de fibonacci`;
    }
    return `O numero ${initialNum} NÃO pertence a sequencia  de fibonacci`;
}

console.log(fibonacci(55)) //digite seu valor no parametro da funçao para testar