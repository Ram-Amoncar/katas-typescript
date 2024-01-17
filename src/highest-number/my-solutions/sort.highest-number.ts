function getHighestNumber(arr: number[]): number {
    return arr.toSorted((a: number, b: number) => b - a)[0]
}

export { getHighestNumber }
