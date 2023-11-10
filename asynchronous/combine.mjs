import { readFile, readFileSync, writeFile } from 'fs'
import { promiseHooks } from 'v8';

const input1 = process.argv.at(-3);
const input2 = process.argv.at(-2);
const output = process.argv.at(-1);

function rfp(filename) {
    const handler = (resolve, reject) => {
        readFile(filename, 'utf-8', (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    }

    return new Promise(handler);
}

const f1 = rfp(input1); 
const f2 = rfp(input2);

Promise.all([f1, f2])
    .then(([data1, data2]) => processBothFiles2(data1, data2))
    .catch(err => console.log("error!", err));

function processBothFiles2(data1, data2) {
    const lines1 = data1.split("\n")
    const lines2 = data2.split("\n")
    let combined = []
    for (let i = 0; i < lines1.length || i < lines2.length; i += 1) {
        if (i < lines1.length) combined.push(lines1[i]);
        if (i < lines2.length) combined.push(lines2[i]);
    }
    return wfp(output, combined.join("\n"));
}



// readFile(input1, 'utf-8', (err1, data1) => {
//     if (err1) {
//         console.log("error!", err1.message);
//     } else {
//         readFile(input2, 'utf-8', (err2, data2) => {
//             if (err2) console.log("error!", err2.message);
//             else {
//                 processBothFiles(data1, data2);
//             }

//         });
//     }
// });


function processBothFiles(data1, data2) {
    const lines1 = data1.split("\n")
    const lines2 = data2.split("\n")
    let combined = []
    for (let i = 0; i < lines1.length || i < lines2.length; i += 1) {
        if (i < lines1.length) combined.push(lines1[i]);
        if (i < lines2.length) combined.push(lines2[i]);
    }
    writeFile(output, combined.join("\n"), 'utf-8', (err) => {
        if (err) {
            console.error("Error!", err.message);
        } else {
            console.log("File written!");
        }
    });
}

function wfp(filename, data) {
    const handler = (resolve, reject) => {
        writeFile(filename, data, 'utf-8', (err) => {
            if (err) reject(err);
            else resolve();
        });
    };
    return new Promise(handler);
}

