import { describe, it, expect } from 'vitest'
import { getFruitCount } from './map.fruit-counter'

describe('fruitCounter', () => {
  it('should return a count of all repeated elements', () => {
    const given = ['🍋', '🍉', '🍒', '🍋', '🍋', '🍎', '🍎', '🍐']

    const actual = getFruitCount(given)

    expect(actual).toMatchObject({
      '🍒': 1,
      '🍋': 3,
      '🍉': 1,
      '🍎': 2,
      '🍐': 1
    })
  })
})
