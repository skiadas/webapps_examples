import { log } from "console";
import { createReadStream } from "fs";

const input = process.argv.at(-2);
const output = process.argv.at(-1);

const rs = createReadStream(input, { highWaterMark: 5, encoding: 'utf-8' });
rs.on('open', () => {
    log('starting to read');
});
rs.on('data', (data) => {
    log("Got data: ", data);
})
rs.on('end', () => {
    log('data ended');
});
rs.on('close', () => {
    log('file closed');
});