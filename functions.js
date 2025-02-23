// Середнє арифметичне
function meanArithmetic(numbers) {
    let sum = numbers.reduce((a, b) => a + b, 0);
    return sum / numbers.length;
}

// Середнє геометричне
function meanGeometric(numbers) {
    let product = numbers.reduce((a, b) => a * b, 1);
    return Math.pow(product, 1 / numbers.length);
}

// Зведення в ступінь (x^y)
function power(x, y) {
    return Math.pow(x, y);
}