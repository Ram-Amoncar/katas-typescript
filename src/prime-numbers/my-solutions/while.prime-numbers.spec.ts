import { describe, it, expect } from 'vitest'
import { getFactorials } from './while.prime-numbers'

describe('PrimeNumbersFactorer', () => {
    it('should factor a number into prime numbers', () => {
        const given = 6

        const actual = getFactorials(given)

        expect(actual).toEqual([2, 3])
    })

    it('should factor a number into prime numbers with non sequential values', () => {
        const given = 10

        const actual = getFactorials(given)

        expect(actual).toEqual([2, 5])
    })

    it('should factor a number into prime numbers with more than 2 primes', () => {
        const given = 70

        const actual = getFactorials(given)

        expect(actual).toEqual([2, 5, 7])
    })

    it('should factor a number into prime numbers with sequential prime numbers', () => {
        const given = 12

        const actual = getFactorials(given)

        expect(actual).toEqual([2, 2, 3])
    })

    it('should factor a complex number into prime numbers', () => {
        const given = 9327186

        const actual = getFactorials(given)

        expect(actual).toEqual([2, 3, 3, 11, 17, 17, 163])
    })
})
