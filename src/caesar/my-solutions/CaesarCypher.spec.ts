import { describe, it, expect } from 'vitest'
import { CaesarCypher } from './CaesarCypher'

describe('cypher', () => {
    describe('Encryption', () => {
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

        it('should handle multiple words', () => {
            const given = 'xyz abc'
            const cypher = new CaesarCypher()
            const actual = cypher.encrypt(given, 1)
            expect(actual).toBe('yac egi')
        })
    })

    describe('Decryption', () => {
        it('should unshift by one position', () => {
            const given = 'bdf'
            const cypher = new CaesarCypher()
            const actual = cypher.decrypt(given, 1)

            expect(actual).toBe('abc')
        })

        it('should unshift by two positions initially', () => {
            const given = 'ceg'
            const cypher = new CaesarCypher()
            const actual = cypher.decrypt(given, 2)

            expect(actual).toBe('abc')
        })
        it('should handle overflow of the alphabet', () => {
            const given = 'yac'
            const cypher = new CaesarCypher()
            const actual = cypher.decrypt(given, 1)
            expect(actual).toBe('xyz')
        })
        it('should handle multiple words', () => {
            const given = 'yac egi'
            const cypher = new CaesarCypher()
            const actual = cypher.decrypt(given, 1)
            expect(actual).toBe('xyz abc')
        })
    })
})
