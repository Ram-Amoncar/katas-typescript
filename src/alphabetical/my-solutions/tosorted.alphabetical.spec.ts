import { describe, it, expect } from 'vitest'
import { sortStringList } from './tosorted.alphabetical'

describe('alphabetical', () => {
  it('should sort alphabetically (programming)', () => {
    const given = ['javascript', 'fortran', 'java', 'python', 'lua', 'csharp']

    const actual = sortStringList(given)

    expect(actual).toEqual(['csharp', 'fortran', 'java', 'javascript', 'lua', 'python'])
  })

  it('should sort alphabetically (alphabets)', () => {
    const given = ['a', 'g', 'l', 'k', 'z', 'w']

    const actual = sortStringList(given)

    expect(actual).toEqual(['a', 'g', 'k', 'l', 'w', 'z'])
  })
})
