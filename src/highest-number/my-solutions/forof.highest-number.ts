function getHighestNumber(arr: number[]): number {
    let highest = 0
    for (const num of arr) {
        highest = highest > num ? highest : num
    }
    return highest
}

export { getHighestNumber }
