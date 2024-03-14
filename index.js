
function convert() {
    var fromunit = document.getElementById('fromunit').value;
    var tounit = document.getElementById('tounit').value;
    var temperature = parseFloat(document.getElementById('temperature').value);
    var convertedValue;
    var resultUnit;
    switch (fromunit) {
        case 'C':
            if (tounit === 'F') {
                convertedValue = (temperature * 9 / 5) + 32;
                resultUnit = 'F';
            } else if (tounit === 'K') {
                convertedValue = temperature + 273.15;
                resultUnit = 'K';
            } else if (tounit === 'R') {
                convertedValue = (temperature + 273.15) * 9 / 5;
                resultUnit = 'R';
            } else {
                convertedValue = temperature;
                resultUnit = 'C';
            }
            break;
        case 'F':
            if (tounit === 'C') {
                convertedValue = (temperature - 32) * 5 / 9;
                resultUnit = 'C';
            } else if (tounit === 'K') {
                convertedValue = (temperature - 32) * 5 / 9 + 273.15;
                resultUnit = 'K';
            } else if (tounit === 'R') {
                convertedValue = temperature + 459.67;
                resultUnit = 'R';
            } else {
                convertedValue = temperature;
                resultUnit = 'F';
            }
            break;
        case 'K':
            if (tounit === 'C') {
                convertedValue = temperature - 273.15;
                resultUnit = 'C';
            } else if (tounit === 'F') {
                convertedValue = (temperature - 273.15) * 9 / 5 + 32;
                resultUnit = 'F';
            } else if (tounit === 'R') {
                convertedValue = temperature * 9 / 5;
                resultUnit = 'R';
            } else {
                convertedValue = temperature;
                resultUnit = 'K';
            }
            break;
        case 'R':
            if (tounit === 'C') {
                convertedValue = (temperature - 491.67) * 5 / 9;
                resultUnit = 'C';
            } else if (tounit === 'F') {
                convertedValue = temperature - 459.67;
                resultUnit = 'F';
            } else if (tounit === 'K') {
                convertedValue = (temperature - 491.67) * 5 / 9 + 273.15;
                resultUnit = 'K';
            } else {
                convertedValue = temperature;
                resultUnit = 'R';
            }
            break;
    }
    document.getElementById('result').value = convertedValue.toFixed(2) + ' ' + resultUnit;
}
