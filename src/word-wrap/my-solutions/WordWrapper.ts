export class WordWrapper {
    wrap(longStr: string, colLength: number): string {
        if (colLength === 0 || longStr.length < colLength) return longStr
        return longStr
            .split('')
            .reduce<string>((prev: string, curVal: string, index: number): string => {
                if (index === 0) return curVal
                if (index % colLength === 0) return prev + '\u000a' + curVal
                else return prev + curVal
            }, '')
    }
}
