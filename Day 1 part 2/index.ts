const data = await Deno.readTextFile("./Day 2/input.txt");

const lines = data.split("\n");

const points = lines.map((entry) => entry.split("   "));

const left = points.map((entry) => Number(entry[0]));
const right = points.map((entry) => Number(entry[1]));

let similarityScore = 0;

for (let i = 0; i < points.length; i++) {
    let count = 0;
    for (const rightValue of right) {
        if (left[i] == rightValue) {
            count += 1;
        }
    }
    similarityScore += left[i] * count;
}

console.log(similarityScore);
