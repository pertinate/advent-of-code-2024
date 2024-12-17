const data = await Deno.readTextFile("./Day 2/input.txt");

const lines = data.split("\n");

const points = lines.map((entry) =>
  entry.trim().split(" ").map((entry) => Number(entry))
);

console.log(points.reduce((acc, next) => {
  console.log(next);
  const expectPositive = (next[0] - next[1]) > 0;
  for (let i = 0; i < next.length - 1; i++) {
    const magnitude = next[i] - next[i + 1];
    if (
      (magnitude < 0 && expectPositive) || (magnitude > 0 && !expectPositive) ||
      Math.abs(magnitude) > 3 || Math.abs(magnitude) < 1
    ) {
      return acc;
    }
  }
  acc += 1;
  return acc;
}, 0));
