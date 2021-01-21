function reverseNum(x) {
    const z = x.toString()
    let y = z.split('').reverse().join('');
    alert('Hey ' + y);
    return Math.sign(x) * parseInt(y);
}

reverseNum()