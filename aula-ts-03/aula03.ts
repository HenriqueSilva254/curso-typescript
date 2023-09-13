function multiply(num1, num2): number  {
    return num1 * num2;
}

function add(num1, num2): number {
    return num1 + num2;
}

function isEven(num): boolean{
    return num % 2 === 0;
}

function showResult(result: number): void {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's even!`);
    }
}