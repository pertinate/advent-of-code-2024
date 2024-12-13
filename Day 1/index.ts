const data = await Deno.readTextFile("./Day 1/input.txt");

const lines = data.split("\n");

const points = lines.map((entry) => entry.split("   "));

const left = points.map((entry) => Number(entry[0]));
const right = points.map((entry) => Number(entry[1]));

left.sort((a, b) => a - b);
right.sort((a, b) => a - b);

let sum = 0;

for (let i = 0; i < points.length; i++) {
    console.log(left[i], right[i], left[i] - right[i]);
    sum += Math.abs(left[i] - right[i]);
}

console.log(sum);
