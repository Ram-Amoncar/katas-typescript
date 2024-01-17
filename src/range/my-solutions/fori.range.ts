function getRange(intialEnd: number, range?: number): number[] {
    let arr: number[] = []
    if (typeof range === 'undefined') {
        if (intialEnd < 0) for (let i = 0; i > intialEnd; i--) arr.push(i)
        else for (let i = 0; i < intialEnd; i++) arr.push(i)
        return arr
    } else if (intialEnd > range) {
        for (let i = intialEnd; i > range; i--) arr.push(i)
        return arr
    } else {
        for (let i = intialEnd; i < range; i++) arr.push(i)
        return arr
    }
}

export { getRange }
