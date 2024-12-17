const data = await Deno.readTextFile("./Day 3/input.txt");

let stringToRegex = data;

let canContinue = true;

let totalValue = 0;

while (canContinue) {
    const result = /mul\(\d{1,},\d{1,}\)/g.exec(stringToRegex);

    if (!result) {
        canContinue = false;
        break;
    }

    const value = result[0];

    stringToRegex = stringToRegex.replace(value, '');

    totalValue += value.replace('mul', '').replace(/\(|\)/g, '').split(',').map(Number).reduce((acc, next) => acc *= next, 1)
}

console.log(totalValue)