function fizzBuzz(nums: number): (string | number)[] {
    return new Array(nums)
        .fill(1)
        .map((_value: string | number, index: number): string | number => {
            index++
            if (index % 3 === 0 && index % 5 === 0) return 'fizzbuzz'
            else if (index % 3 === 0) return 'fizz'
            else if (index % 5 === 0) return 'buzz'
            else return index
        })
}

export { fizzBuzz }
