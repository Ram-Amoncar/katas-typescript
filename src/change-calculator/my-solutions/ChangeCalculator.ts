export class ChangeCalculator {
    #money = new Map([
        [1000, 1],
        [500, 1],
        [200, 1],
        [100, 1],
        [50, 1],
        [20, 1],
        [10, 1],
        [5, 1],
        [2, 1]
    ])

    getChange(bigBill: number): number[] {
        let change: number[] = []
        while (bigBill !== 0) {
            for (const k of this.#money.keys()) {
                let bills = this.#money.get(k)
                if (k <= bigBill && bills !== 0 && bills !== undefined) {
                    change.push(k)
                    bigBill -= k
                    this.#money.set(k, bills - 1)
                    break
                }
            }
        }
        return change
    }

    configMoney(money: Map<number, number>) {
        this.#money = money
    }
}
