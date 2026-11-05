function convertTemperature(celsius, toFahrenheit) {
    if (toFahrenheit === true) {
        return (celsius * 9 / 5) + 32;
    } else {
        return (celsius - 32) * 5 / 9;
    }
}

console.log(convertTemperature(0, true));
console.log(convertTemperature(100, true));
console.log(convertTemperature(32, false));
console.log(convertTemperature(212, false));

function validatePassword(password) {
    let hasLength = password.length > 8;
    let hasLetter = /[a-zA-Z]/.test(password);
    let hasNumber = /[0-9]/.test(password);

    return hasLength && hasLetter && hasNumber;
}

console.log(validatePassword("hello12345"));
console.log(validatePassword("password"));
console.log(validatePassword("123456789"));
console.log(validatePassword("abc123"));


function calculate(a, b, operation) {
    if (operation === "+") {
        return a + b;
    } else if (operation === "-") {
        return a - b;
    } else if (operation === "*") {
        return a * b;
    } else if (operation === "/") {
        if (b === 0) {
            return "На ноль делить нельзя";
        }
        return a / b;
    } else {
        return "Неизвестная операция";
    }
}

console.log(calculate(10, 5, "+"));
console.log(calculate(10, 5, "-"));
console.log(calculate(10, 5, "*"));
console.log(calculate(10, 5, "/"));
console.log(calculate(10, 0, "/"));