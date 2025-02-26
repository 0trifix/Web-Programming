function slowSum(a: number, b: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b);
        },1000)
    });
}

function slowMult(a: number, b: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(a*b);
        },1500)
    });
}

function slowDiv(a: number, b: number): Promise<number> {
    if(b === 0) {
        return Promise.reject(new Error("Division by zero"));
    }
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(a/b);
        },2000)
    });
}

async function calculate() {
    let sum = await slowSum(1,5);
    let mult = await slowMult(sum, 0.5);
    console.log(mult);
}
calculate();
