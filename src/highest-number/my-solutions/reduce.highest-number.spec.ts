import { getHighestNumber } from './reduce.highest-number'
import { describe, it, expect } from 'vitest'

describe('getHighestNumber', () => {
  it('should get the highest number given an array of one number', () => {
    const given = [42]

    const actual = getHighestNumber(given)

    expect(actual).toBe(42)
  })
})

describe('getHighestNumber', () => {
  it('should get the highest number given an array of one number', () => {
    const given = [42, 28, 1000, 28, 10, 100, 680, 1000, 102, 1]

    const actual = getHighestNumber(given)

    expect(actual).toBe(1000)
  })
})
