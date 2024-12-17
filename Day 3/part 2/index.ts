const data = await Deno.readTextFile("./Day 3/input.txt");

let stringToRegex = data;

let canContinue = true;

let totalValue = 0;

let canDo = true;

while (canContinue) {
    const result = /(mul\(\d{1,},\d{1,}\))|(do\(\))|(don\'t\(\))/g.exec(stringToRegex);

    if (!result) {
        canContinue = false;
        break;
    }

    const value = result[0];

    stringToRegex = stringToRegex.replace(value, '');

    if (value == 'do()') {
        canDo = true;
        continue;
    }

    if (value == 'don\'t()') {
        canDo = false;
        continue
    }

    if (canDo) {
        totalValue += value.replace('mul', '').replace(/\(|\)/g, '').split(',').map(Number).reduce((acc, next) => acc *= next, 1)
    }
}

console.log(totalValue)