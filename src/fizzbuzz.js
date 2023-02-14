export default function fizzbuzz(n) {
    if(typeof n !== 'number') throw new Error('n should be a number')
    if(Number.isNaN(n)) throw new Error('n should be a number')
    const multiplies ={
        3: 'Fizz',
        5: 'Buzz',
        7: 'Woff',
    }
    let output = '';
    Object.entries(multiplies).forEach(([key, value]) => {
        if(n % key === 0) output += value;
    })
    return output ===''?n:output;
}