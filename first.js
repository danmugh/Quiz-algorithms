function reverse(n) {
    const y = n.toString()
    const length = y.length
    let z = []

    for (let a = 0; a < length; a++){

        z.push(y[length - 1 - a])
    }

    return z.join('')
}

console.log(reverse(243));