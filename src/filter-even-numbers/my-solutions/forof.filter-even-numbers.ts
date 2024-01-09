function filterEvenNumbers(numbers: number[]): number[] {
  let evenNumbers: number[] = []
  for (const num of numbers) if (num % 2 === 0) evenNumbers.push(num)
  return evenNumbers
}

export { filterEvenNumbers }
