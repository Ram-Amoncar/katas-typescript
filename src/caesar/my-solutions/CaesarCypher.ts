export class CaesarCypher {
    private LETTER_SET = 'abcdefghijklmnopqrstuvwxyz'
    encrypt(text: string, offset: number = 1): string {
        const larr = this.LETTER_SET.split('')
        text = text.toLowerCase().trim()
        return text.split('').reduce((prev: string, curVal: string): string => {
            let li = larr.findIndex((v: string) => v === curVal)
            if (li === -1) return prev + ' '
            else {
                let val = prev + larr[this.calOffset(li + offset)]
                offset++
                return val
            }
        }, '')
    }

    // decrypt(cypher: string, offset: number): string {}

    calOffset(ofset: number): number {
        if (ofset > this.LETTER_SET.length - 1) {
            while (ofset > this.LETTER_SET.length - 1) {
                ofset = ofset - this.LETTER_SET.length
            }
        }
        return ofset
    }
}
