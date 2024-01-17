function getPowerOfTwo(numbers: number[]): number[] {
    return recussiveArrayBuilder(numbers.length - 1, [], numbers).toReversed()
}

function recussiveArrayBuilder(index: number, resArr: number[], arr: number[]): number[] {
    if (index === -1) return resArr
    else {
        resArr.push(arr[index] * arr[index])
        return recussiveArrayBuilder(index - 1, resArr, arr)
    }
}

export { getPowerOfTwo }
