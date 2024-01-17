import { describe, expect, it } from 'vitest'
import { getPowerOfTwo } from './recursive.power-of-two'

describe('getPowerOfTwo', () => {
    it('should get the list of numbers that are to the power of 2 given an list of numbers', () => {
        const given = [4]

        const actual = getPowerOfTwo(given)

        expect(actual).toStrictEqual([16])
    })
})

describe('getPowerOfTwo', () => {
    it('should get the list of numbers that are to the power of 2 given an list of numbers', () => {
        const given = [4, 2, 1, 9, 0]

        const actual = getPowerOfTwo(given)

        expect(actual).toStrictEqual([16, 4, 1, 81, 0])
    })
})
