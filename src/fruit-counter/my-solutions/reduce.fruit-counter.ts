function getFruitCount(fruits: string[]): object {
  type fruitCounter = Record<string, number>
  return fruits.reduce<fruitCounter>((prev: fruitCounter, curValue: string): fruitCounter => {
    prev.hasOwnProperty(curValue) ? prev[curValue]++ : (prev[curValue] = 1)
    return prev
  }, {})
}

export { getFruitCount }
