function appendChar(char) {
    document.getElementById('display').value += char;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteChar() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
}

function calculateResult() {
    let display = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(display);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
