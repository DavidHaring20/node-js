// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I'm so happy!");
//     }, 4000);
// }).then(message => {
//     console.log(message);
// });

function myPromise() {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve("The mitochondria is the power house of the cell.");
            }, 5000);
        } catch {
            reject("Every promise don't work this way.");
        };
    });
};

myPromise();

(async function myAsynchronousFunction() {
    try {
        const message = await myPromise();
        console.log(message);
    } catch (errorMessage) {
        console.log(errorMessage);
    }
})();