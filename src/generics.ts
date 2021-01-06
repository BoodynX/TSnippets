const names: Array<string> = []; // string[]
// @ts-ignore
let namesGenericExampleStub = names[0].split(' ');


// Declare what Promise will resolve to
const promise: Promise<string> = new Promise((resolve, _) => {
    setTimeout(() => {
        resolve('This is a string');
    }, 2000);
});

promise.then(data => {
    data.split(' ');
})