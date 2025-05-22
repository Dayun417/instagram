function calculate() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const operator = document.getElementById('operator').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = '숫자를 모두 입력하세요.';
    } else {
        if (operator === '+') {
            result = num1 + num2;
        } else if (operator === '-') {
            result = num1 - num2;
        } else if (operator === '*') {
            result = num1 * num2;
        } else if (operator === '/') {
            if (num2 === 0) {
                result = 0;
            } else {
                result = num1 / num2;
            }
        } else {
            result = 'error';
        }
    }

    document.getElementById('result').innerText = '결과 = ' + result;
}
