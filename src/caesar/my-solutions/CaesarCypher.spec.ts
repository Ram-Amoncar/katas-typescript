import { describe, it, expect } from 'vitest'
import { CaesarCypher } from './CaesarCypher'

describe('cypher', () => {
    it('should shift by one position', () => {
        const given = 'abc'
        const cypher = new CaesarCypher()
        const actual = cypher.encrypt(given, 1)

        expect(actual).toBe('bdf')
    })

    it('should shift by two positions initially', () => {
        const given = 'abc'
        const cypher = new CaesarCypher()
        const actual = cypher.encrypt(given, 2)

        expect(actual).toBe('ceg')
    })

    it('should handle overflow of the alphabet', () => {
        const given = 'xyz'
        const cypher = new CaesarCypher()
        const actual = cypher.encrypt(given, 1)

        expect(actual).toBe('yac')
    })
})
