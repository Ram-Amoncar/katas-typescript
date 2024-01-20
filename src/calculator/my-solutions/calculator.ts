function calculateString(str: string): number {
    return str
        .split(' ')
        .reduce<number>((prev: number, curVal: string, curIndex: number, arr: string[]): number => {
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
        }, 0)
}

export { calculateString }
