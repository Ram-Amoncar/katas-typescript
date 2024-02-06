import { describe, it, expect } from 'vitest'
import { StringCalculator } from './StringCalculator'

describe('Calculator', () => {
    it('should add two numbers', () => {
        const sc = new StringCalculator()
        const given = '2+2'
        const actual = sc.calculate(given)

        expect(actual).toBe(4)
    })

    it('should add more than two numbers', () => {
        const sc = new StringCalculator()
        const given = '2+2+1'

        const actual = sc.calculate(given)

        expect(actual).toBe(5)
    })

    it('should subtract two numbers', () => {
        const sc = new StringCalculator()
        const given = '2 -2'

        const actual = sc.calculate(given)

        expect(actual).toBe(0)
    })

    it('should subtract more than two numbers', () => {
        const sc = new StringCalculator()
        const given = '2 -2 -5'

        const actual = sc.calculate(given)

        expect(actual).toBe(-5)
    })

    it('should perform multiple combined operations (adding and subtracting)', () => {
        const sc = new StringCalculator()
        const given = '2 - 2 + 5'

        const actual = sc.calculate(given)

        expect(actual).toBe(5)
    })

    it('should perform multiple combined operations (adding and subtracting) when it starts with a negative number', () => {
        const sc = new StringCalculator()
        const given = '-2 -2 + 5'

        const actual = sc.calculate(given)

        expect(actual).toBe(1)
    })
    it('should perform multiple combined operations (adding and subtracting) (Zero spaces)', () => {
        const sc = new StringCalculator()
        const given = '-2--2+5+9-1'

        const actual = sc.calculate(given)

        expect(actual).toBe(13)
    })
})
