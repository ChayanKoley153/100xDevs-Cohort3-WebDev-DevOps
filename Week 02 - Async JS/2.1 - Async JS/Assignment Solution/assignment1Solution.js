// Try to create promosofied version of setTimeout

function promisifiedSetTimeout(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

promisifiedSetTimeout(2000).then(() => {
    console.log("Called after 2 seconds");
});