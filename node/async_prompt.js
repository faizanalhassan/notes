const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


async function prompt(msg) {
    return new Promise((resolve) => {
        rl.question(msg, function (input) {
            resolve(input);
        })
    })
}
