export class ChristmasTree {
    makeTree(size: number): string {
        let tree = ''
        let arr: number[] = []
        for (let i = 1; arr.length < size; i++) if (i % 2 !== 0) arr.push(i)
        let space = size - 1
        for (let i = 0; i < size; i++, space--) {
            tree = this.appendSpace(tree, space)
            tree = this.append(tree, '*', arr[i])
            tree = this.appendNewLine(tree)
        }
        tree = this.appendSpace(tree, Math.floor(arr[arr.length - 1] / 2))
        tree = this.append(tree, '|')
        tree = this.appendNewLine(tree)
        return tree
    }
    appendSpace(str: string, len: number = 1): string {
        for (let i = len; i > 0; i--) str += '\u0020'
        return str
    }
    appendNewLine(str: string, len: number = 1): string {
        for (let i = len; i > 0; i--) str += '\u000a'
        return str
    }
    append(str: string, fill: string, len: number = 1): string {
        let filler = ''
        for (let i = 0; i < len; i++) filler += fill
        return str + filler
    }
}
