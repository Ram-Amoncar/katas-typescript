export class StringCalculator {
    calculate(str: string): number {
        return StringCalculator.formatString(str)
            .split(' ')
            .reduce<number>(
                (prev: number, curVal: string, curIndex: number, arr: string[]): number => {
                    const OPTs = ['+', '-']
                    if (!isNaN(Number(curVal))) {
                        switch (curIndex) {
                            case 0:
                                return prev + Number(curVal)
                            default: {
                                let i = OPTs.findIndex((val: string) => arr[curIndex - 1] === val)
                                switch (OPTs[i]) {
                                    case '+':
                                        return prev + Number(curVal)
                                    default:
                                        return prev - Number(curVal)
                                }
                            }
                        }
                    }
                    return prev
                },
                0
            )
    }
    static formatString(str: string): string {
        let chars = str.replaceAll(' ', '').split('')
        const SIGNs = ['+', '-']
        const NOT_ALLOWED_SINGLE_SIGN = ['+']
        let cleanArr: string[] = []
        for (let i = 0; i < chars.length; i++) {
            if (i === 0) {
                SIGNs.includes(chars[i])
                    ? cleanArr.push(chars[i] + chars[++i])
                    : cleanArr.push(chars[i])
            } else if (!isNaN(Number(chars[i]))) {
                SIGNs.includes(chars[i - 2])
                    ? cleanArr.push(chars[i - 2], chars[i - 1] + chars[i])
                    : cleanArr.push(chars[i - 1], chars[i])
            }
        }
        return cleanArr.reduce((prev: string, curVal: string, i: number): string => {
            if (typeof curVal !== 'undefined' && curVal.length > 1) {
                for (const sign of NOT_ALLOWED_SINGLE_SIGN) {
                    curVal = curVal.replaceAll(sign, '')
                }
            }
            return i === 0 ? curVal : prev + '\u0020' + curVal
        }, '')
    }
}
