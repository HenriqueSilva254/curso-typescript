function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

function summ(num1, num2): number {
    return num1 + num2;
}

function isEven(num: number) {
    return num % 2 === 0;
}

function showResult(result: number): void {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's even!`);
    }
}

(() => {
    const num1: string | null = prompt("First Number");
    const num2: string | null = prompt("Second Number");

    if(typeof num1 === "number" && 
    typeof num2 === "number"){
        let result= summ(num1,num2);
        result += multiply(1,2);
        showResult(result);
    }else{
        console.log("Write a number")
    }
    
})();
