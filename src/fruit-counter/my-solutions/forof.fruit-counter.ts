function getFruitCount(fruits: string[]): object {
    type fruitCounter = Record<string, number>
    let counter: fruitCounter = {}
    for (const fruit of fruits) {
        if (counter.hasOwnProperty(fruit)) counter[fruit]++
        else counter[fruit] = 1
    }
    return counter
}

export { getFruitCount }
