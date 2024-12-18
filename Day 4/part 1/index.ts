const data = await Deno.readTextFile("./Day 4/input.txt");

const xmasList = data.split('\n').map(entry => entry.trim().split(''));

const sequence = ['X', 'M', 'A', 'S']

let xmasCount = 0;

const getSequence = (x: number, y: number, xMod: number = 0, yMod: number = 0, index: number = 0) => {
    // console.log(x, y)
    if (x < 0 || y < 0) return;

    if (xmasList.length - 1 < y || xmasList[y].length - 1 < x) return;

    if (xmasList[y][x] != sequence[index]) {
        return;
    }


    if (index != sequence.length - 1) {
        // console.log(index, sequence.length)
        return getSequence(x + xMod, y + yMod, xMod, yMod, index + 1);
    }

    xmasCount += 1;
}

for (let y = 0; y < xmasList.length; y++) {
    for (let x = 0; x < xmasList[y].length; x++) {
        getSequence(x, y, 0, -1);
        getSequence(x, y, -1, 0);
        getSequence(x, y, -1, -1);
        getSequence(x, y, 0, 1);
        getSequence(x, y, 1, 0);
        getSequence(x, y, 1, 1);
        getSequence(x, y, -1, 1);
        getSequence(x, y, 1, -1);
    }
}

console.log(xmasCount)