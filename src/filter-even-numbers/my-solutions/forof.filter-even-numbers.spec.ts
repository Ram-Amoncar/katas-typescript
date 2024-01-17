import { describe, it, expect } from 'vitest'
import { filterEvenNumbers } from './forof.filter-even-numbers'

describe('filterEvenNumbers', () => {
    it('should filter the even numbers', () => {
        const given = [1, 24, 3, 8, 10, 392, 77]

        const actual = filterEvenNumbers(given)

        expect(actual).toEqual([24, 8, 10, 392])
    })
})
