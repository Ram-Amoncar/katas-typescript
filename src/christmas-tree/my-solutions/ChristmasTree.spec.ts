import { describe, it, expect } from 'vitest'
import { ChristmasTree } from './ChristmasTree'

describe('ChristmasTree', () => {
    it('should render a tree with 3 rows', () => {
        const christmasTree = new ChristmasTree()

        const actual = christmasTree.makeTree(3)

        expect(actual).toBe(`  *
 ***
*****
  |
`)
    })

    it('should render a tree with 4 rows', () => {
        const christmasTree = new ChristmasTree()

        const actual = christmasTree.makeTree(4)

        expect(actual).toBe(`   *
  ***
 *****
*******
   |
`)
    })
})
