export class BeerSong {
    verse(num: number): string {
        switch (num) {
            case 2:
                return '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n'
            case 1:
                return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n'
            case 0:
                return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'
            default:
                return `${num} bottles of beer on the wall, ${num} bottles of beer.\nTake one down and pass it around, ${
                    num - 1
                } bottles of beer on the wall.\n`
        }
    }
    sing(start: number, end: number = 0): string {
        for (let song = ''; start >= end; start--) {
            switch (start) {
                case end:
                    return song + this.verse(start)
                default:
                    song += this.verse(start) + '\n'
            }
        }
        return ''
    }
}
