function getFactorials(num: number): number[] {
    let facts = new Array<number>()
    let i = 1
    while (num > 1) {
        i++
        if (isPrime(i) && Number.isInteger(num / i)) {
            facts.push(i)
            num = num / i
            i = 1
        }
    }
    return facts
}

function isPrime(n: number): boolean {
    if (n < 2) return false
    for (let i = 2; i < n; i++) if (n % i === 0) return false
    return true
}

export { getFactorials }
