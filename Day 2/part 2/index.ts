const data = await Deno.readTextFile("./Day 2/input.txt");

const lines = data.split("\n");

const points = lines.map((entry) =>
    entry.trim().split(" ").map((entry) => Number(entry))
);

function makeSubLists(input: typeof points[number]) {
    return new Array(input.length)
        .fill(null)
        .map((_, i) => input.filter((_, i1) => i1 !== i));
}

function problemDampener(input: typeof points[number]) {
    const output = isSafe(input);
    if (output === false) {
        const subLists = makeSubLists(input);
        const variousOutcomes = subLists.map(isSafe);
        return variousOutcomes.includes(true);
    }
    return output;
}

function isSafe(report: typeof points[number]) {
    let direction = null;
    let prevLevel = null;
    for (const level of report) {
        const hasPrevLevel = prevLevel !== null;
        const currDir = getDirection(prevLevel, level);
        const isFlat = currDir === "FLAT";
        let dirsMatch = currDir === direction;

        // Initial item
        if (!hasPrevLevel) {
            prevLevel = level;
            continue;
        }

        // Second item to determine direction
        if (direction === null && hasPrevLevel) {
            direction = currDir;
            dirsMatch = true;
        }

        // Step check
        if (Math.abs(level - prevLevel) > 3) {
            return false;
        }

        // Direction check
        if (isFlat || !dirsMatch) {
            return false;
        }

        prevLevel = level;
    }
    return true;
}
function getDirection(y1: number, y2: number) {
    const isUp = y1 > y2;
    const isFlat = y1 === y2;
    return isUp ? "UP" : isFlat ? "FLAT" : "DOWN";
}

console.log(points.reduce((acc, next) => acc + (problemDampener(next) === true ? 1 : 0), 0))

// console.log(points.reduce((acc, next) => {
//     console.log(next);
//     const expectPositive = (next[0] - next[1]) > 0;
//     for (let i = 0; i < next.length - 1; i++) {
//         const magnitude = next[i] - next[i + 1];
//         if (
//             (magnitude < 0 && expectPositive) || (magnitude > 0 && !expectPositive) ||
//             Math.abs(magnitude) > 3 || Math.abs(magnitude) < 1
//         ) {
//             return acc;
//         }
//     }
//     acc += 1;
//     return acc;
// }, 0));
