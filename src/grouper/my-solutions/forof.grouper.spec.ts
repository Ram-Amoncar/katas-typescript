import { describe, it, expect } from 'vitest'
import { getGrouped } from './forof.grouper'

describe('grouper', () => {
  it('should group all objects by a property', () => {
    const given = [
      { name: 'Alice', age: 21 },
      { name: 'Max', age: 20 },
      { name: 'Jane', age: 20 }
    ]

    const actual = getGrouped(given)

    expect(actual).toMatchObject({
      20: ['Max', 'Jane'],
      21: ['Alice']
    })
  })
})
