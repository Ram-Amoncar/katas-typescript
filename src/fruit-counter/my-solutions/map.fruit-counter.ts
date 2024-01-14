function getFruitCount(fruits: string[]): object {
  let counter: Record<string, number> = {}
  fruits.map(value =>
    typeof counter[value] === 'undefined' ? (counter[value] = 1) : counter[value]++
  )
  return counter
}

export { getFruitCount }
