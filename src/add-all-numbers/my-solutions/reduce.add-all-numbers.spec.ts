import { it, describe, expect } from 'vitest'
import { getSum } from './reduce.add-all-numbers'

describe('addAllNumbers', () => {
  it('should add all the numbers', () => {
    const given = [10, 2, 3]

    const actual = getSum(given)

    expect(actual).toBe(15)
  })
})

describe('addAllNumbers', () => {
  it('should add all the numbers', () => {
    const given = [10]

    const actual = getSum(given)

    expect(actual).toBe(10)
  })
})
