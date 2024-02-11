export class CaesarCypher {
    private LETTER_ARRAY = 'abcdefghijklmnopqrstuvwxyz'.split('')
    encrypt(text: string, offset: number = 1): string {
        return text
            .toLowerCase()
            .trim()
            .split('')
            .reduce((prev: string, curVal: string): string => {
                const LETTER_INDEX = this.LETTER_ARRAY.findIndex((v: string) => v === curVal)
                if (LETTER_INDEX === -1) return prev + ' '
                const VALUE = prev + this.LETTER_ARRAY[this.calOffset(LETTER_INDEX + offset)]
                offset++
                return VALUE
            }, '')
    }

    decrypt(cypher: string, offset: number): string {
        return cypher
            .toLowerCase()
            .trim()
            .split('')
            .reduce((prev: string, curVal: string): string => {
                const LETTER_INDEX = this.LETTER_ARRAY.findIndex((v: string) => v === curVal)
                if (LETTER_INDEX === -1) return prev + ' '
                const VALUE = prev + this.LETTER_ARRAY[this.calOffset(LETTER_INDEX - offset)]
                offset++
                return VALUE
            }, '')
    }

    calOffset(offset: number): number {
        if (offset > this.LETTER_ARRAY.length - 1)
            return this.calOffset(offset - this.LETTER_ARRAY.length)
        if (offset < 0) return this.calOffset(this.LETTER_ARRAY.length - Math.abs(offset))
        return offset
    }
}
