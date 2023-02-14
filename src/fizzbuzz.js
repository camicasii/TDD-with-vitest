export default function fizzbuzz(n) {
    if(typeof n !== 'number') throw new Error('n should be a number')
    if(Number.isNaN(n)) throw new Error('n should be a number')
    if(n % 3 === 0) return 'Fizz'

    return n;
}