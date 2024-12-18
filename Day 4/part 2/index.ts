const data = await Deno.readTextFile("./Day 4/input.txt");

const xmasList = data.split('\n').map(entry => entry.trim().split(''));

let xmasCount = 0;

const getSequence = (x: number, y: number) => {
    if (x < 0 || y < 0) return false;

    if (xmasList.length - 1 < y || xmasList[y].length - 1 < x) return false;

    if (xmasList[y][x] !== 'A') {
        return false;
    }

    const surrounding = [
        xmasList?.[y - 1]?.[x + 1] ?? null,
        xmasList?.[y - 1]?.[x - 1] ?? null,
        xmasList?.[y + 1]?.[x + 1] ?? null,
        xmasList?.[y + 1]?.[x - 1] ?? null,
    ]

    const mCount = surrounding.filter(entry => entry == 'M').length ?? 0;
    const sCount = surrounding.filter(entry => entry == 'S').length ?? 0;


    if (mCount == 2 && sCount == 2 && (
        (surrounding[0] == "M" && surrounding[1] == "M") ||
        (surrounding[0] == "S" && surrounding[1] == "S") ||
        (surrounding[1] == "M" && surrounding[3] == "M") ||
        (surrounding[1] == "S" && surrounding[3] == "S")
    )) {
        return true;
    }

    return false
}

for (let y = 0; y < xmasList.length; y++) {
    for (let x = 0; x < xmasList[y].length; x++) {
        if (getSequence(x, y)) {
            xmasCount += 1;
        }
    }
}

console.log(xmasCount)