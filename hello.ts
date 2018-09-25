class Hello {
    hello(name: string) {
        console.log(`Hello, ${name}!`)
    }
}

const hello = new Hello();

['typescript', 'class'].map(item => `${item}!`).forEach(item =>
    hello.hello(item)
)
