class Hello {
    hello(name: string) {
        console.log(`Hello, ${name}!`);
    }
}

['typescript', 'es6'].map(item => `${item}!`).forEach(item =>
    new Hello().hello(item)
);

function futureAdd(a: number, b: number) {
    return new Promise((resolve: (str: number) => void) => {
        resolve(1);
    });
}

async function myAdd() {
    const result = await futureAdd(1, 2);
    console.log(result);
}

myAdd();

'abc'.startsWith('a');

[100, 200].find(item => item > 100);

function mylog(message?: any, ...optionalParams: any[]) {
    console.log(`[mylog]`, ...arguments);
}

mylog('aaa', 'bbb', 'ccc');

window.alert('Hello');
