import { writeFile } from "fs";

const start = Number(process.argv.at(-3));
const end = Number(process.argv.at(-2));
const output = process.argv.at(-1);
const numbers = [];
for (let i = start; i <= end; i+= 1) {
    numbers.push(i);
}
const data = numbers.join("\n");

const f = (err) => {
    if (err) console.log("Error!", err.message);
    else console.log("All done!");
};

writeFile(output, data, 'utf-8', f);

//....