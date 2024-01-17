import { describe, expect, test } from 'vitest'
import { getRange } from './fori.range'

describe('range', () => {
    test('should give an array of 0 to 4 element values init', () => {
        const actual = getRange(5)

        expect(actual).toEqual([0, 1, 2, 3, 4])
    })

    test('should give an array of 10 to 20 element values init', () => {
        const actual = getRange(10, 21)

        expect(actual).toEqual([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
    })

    test('should give an array of 85 to 80 element values init', () => {
        const actual = getRange(85, 79)

        expect(actual).toEqual([85, 84, 83, 82, 81, 80])
    })

    test('should give an array of 0 to -4 element values init', () => {
        const actual = getRange(-5)

        expect(actual).toEqual([0, -1, -2, -3, -4])
    })

    test('should give an array of 2 to -10 element values init', () => {
        const actual = getRange(2, -11)

        expect(actual).toEqual([2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10])
    })

    test('should give an array of -85 to -80 element values init', () => {
        const actual = getRange(-85, -79)

        expect(actual).toEqual([-85, -84, -83, -82, -81, -80])
    })
})
