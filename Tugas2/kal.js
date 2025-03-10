const calc = (operator, ...numbers) => {

    let result = numbers[0]; 
    for (let i = 1; i < numbers.length; i++) {

        switch (operator) {
            case '+': 
                result += numbers[i]; 
                break;
            case '-': 
                result -= numbers[i];
                break; 
                
            case '*':  
                result *= numbers[i]; 
                break;
            case '/': 
                result /= numbers[i]; 
                break;
            case '%': 
                result %= numbers[i]; 
                break;
            default: 
                return "Operator tidak valid!";
        }
    }

    return result;
}

console.log(calc('+', 20, 15, 15)); 
console.log(calc('-', 15, 3, 2));
console.log(calc('*', 5, 3, 2));
console.log(calc('/', 20, 5));
console.log(calc('%', 20, 3));