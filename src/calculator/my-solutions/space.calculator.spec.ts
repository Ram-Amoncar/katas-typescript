import { describe, it, expect } from 'vitest'
import { calculateString } from './space.calculator'

describe('Calculator', () => {
    it('should add two numbers', () => {
        const given = '2 + 2'

        const actual = calculateString(given)

        expect(actual).toBe(4)
    })

    it('should add more than two numbers', () => {
        const given = '2 + 2 + 1'

        const actual = calculateString(given)

        expect(actual).toBe(5)
    })

    it('should subtract two numbers', () => {
        const given = '2 - 2'

        const actual = calculateString(given)

        expect(actual).toBe(0)
    })

    it('should subtract more than two numbers', () => {
        const given = '2 - 2 - 5'

        const actual = calculateString(given)

        expect(actual).toBe(-5)
    })

    it('should perform multiple combined operations (adding and subtracting)', () => {
        const given = '2 - 2 + 5'

        const actual = calculateString(given)

        expect(actual).toBe(5)
    })

    it('should perform multiple combined operations (adding and subtracting) when it starts with a negative number', () => {
        const given = '-2 - 2 + 5'

        const actual = calculateString(given)

        expect(actual).toBe(1)
    })
})
