module.exports = function toReadable (number) {
let string = number.toString();
let a = '';
let b = '';
let c = '';
if (string.length === 3 && string[0] === '1') {
a = 'one hundred';
}
else if (string.length === 3 && string[0] === '2') {
    a = 'two hundred'; 
}
else if (string.length === 3 && string[0] === '3') {
    a = 'three hundred'; 
}
else if (string.length === 3 && string[0] === '4') {
    a = 'four hundred'; 
}
else if (string.length === 3 && string[0] === '5') {
    a = 'five hundred'; 
}
else if (string.length === 3 && string[0] === '6') {
    a = 'six hundred'; 
}
else if (string.length === 3 && string[0] === '7') {
    a = 'seven hundred'; 
}
else if (string.length === 3 && string[0] === '8') {
    a = 'eight hundred'; 
}
else if (string.length === 3 && string[0] === '9') {
    a = 'nine hundred'; 
}
if (string.length === 3 && string[1] === '0') {
    b = ''; 
}
else if ((string.length === 3 && string[1] === '1') && (string.length === 3 && string[2] === '0') || (string.length === 2 && string[0] === '1') && (string.length === 2 && string[1] === '0')) {
    b = 'ten'; 
}
else if ((string.length === 3 && string[1] === '1') && (string.length === 3 && string[2] === '1') || (string.length === 2 && string[0] === '1') && (string.length === 2 && string[1] === '1')) {
    b = 'eleven'; 
}
else if ((string.length === 3 && string[1] === '1') && (string.length === 3 && string[2] === '2') || (string.length === 2 && string[0] === '1') && (string.length === 2 && string[1] === '2')) {
    b = 'twelve'; 
}
else if ((string.length === 3 && string[1] === '1') && (string.length === 3 && string[2] === '3') || (string.length === 2 && string[0] === '1') && (string.length === 2 && string[1] === '3')) {
    b = 'thirteen'; 
}
else if ((string.length === 3 && string[1] === '1') && (string.length === 3 && string[2] === '4') || (string.length === 2 && string[0] === '1') && (string.length === 2 && string[1] === '4')) {
    b = 'fourteen'; 
}
else if ((string.length === 3 && string[1] === '1') && (string.length === 3 && string[2] === '5') || (string.length === 2 && string[0] === '1') && (string.length === 2 && string[1] === '5')) {
    b = 'fifteen'; 
}
else if ((string.length === 3 && string[1] === '1') && (string.length === 3 && string[2] === '6') || (string.length === 2 && string[0] === '1') && (string.length === 2 && string[1] === '6')) {
    b = 'sixteen'; 
}
else if ((string.length === 3 && string[1] === '1') && (string.length === 3 && string[2] === '7') || (string.length === 2 && string[0] === '1') && (string.length === 2 && string[1] === '7')) {
    b = 'seventeen'; 
}
else if ((string.length === 3 && string[1] === '1') && (string.length === 3 && string[2] === '8') || (string.length === 2 && string[0] === '1') && (string.length === 2 && string[1] === '8')) {
    b = 'eighteen'; 
}
else if ((string.length === 3 && string[1] === '1') && (string.length === 3 && string[2] === '9') || (string.length === 2 && string[0] === '1') && (string.length === 2 && string[1] === '9')) {
    b = 'nineteen'; 
}

else if (string.length === 3 && string[1] === '2' || string.length === 2 && string[0] === '2') {
    b = 'twenty'; 
}
else if (string.length === 3 && string[1] === '3' || string.length === 2 && string[0] === '3') {
    b = 'thirty'; 
}
else if (string.length === 3 && string[1] === '4' || string.length === 2 && string[0] === '4') {
    b = 'forty'; 
}
else if (string.length === 3 && string[1] === '5' || string.length === 2 && string[0] === '5') {
    b = 'fifty'; 
}
else if (string.length === 3 && string[1] === '6' || string.length === 2 && string[0] === '6') {
    b = 'sixty'; 
}
else if (string.length === 3 && string[1] === '7' || string.length === 2 && string[0] === '7') {
    b = 'seventy'; 
}
else if (string.length === 3 && string[1] === '8' || string.length === 2 && string[0] === '8') {
    b = 'eighty'; 
}
else if (string.length === 3 && string[1] === '9' || string.length === 2 && string[0] === '9') {
    b = 'ninety'; 
}

if ((string.length === 3 && string[2] === '1' && string[1] !== '1') || (string.length === 2 && string[1] === '1'&& string[0] !== '1') || (string.length === 1 && string[0] === '1')) {
    c = 'one';
}
else if ((string.length === 3 && string[2] === '2' && string[1] !== '1') || (string.length === 2 && string[1] === '2'&& string[0] !== '1') || (string.length === 1 && string[0] === '2')) {
    c = 'two';
}
else if ((string.length === 3 && string[2] === '3' && string[1] !== '1') || (string.length === 2 && string[1] === '3'&& string[0] !== '1') || (string.length === 1 && string[0] === '3')) {
    c = 'three';
}
else if ((string.length === 3 && string[2] === '4' && string[1] !== '1') || (string.length === 2 && string[1] === '4'&& string[0] !== '1') || (string.length === 1 && string[0] === '4')) {
    c = 'four';
}
else if ((string.length === 3 && string[2] === '5' && string[1] !== '1') || (string.length === 2 && string[1] === '5'&& string[0] !== '1') || (string.length === 1 && string[0] === '5')) {
    c = 'five';
}
else if ((string.length === 3 && string[2] === '6' && string[1] !== '1') || (string.length === 2 && string[1] === '6'&& string[0] !== '1') || (string.length === 1 && string[0] === '6')) {
    c = 'six';
}
else if ((string.length === 3 && string[2] === '7' && string[1] !== '1') || (string.length === 2 && string[1] === '7'&& string[0] !== '1') || (string.length === 1 && string[0] === '7')) {
    c = 'seven';
}
else if ((string.length === 3 && string[2] === '8' && string[1] !== '1') || (string.length === 2 && string[1] === '8'&& string[0] !== '1') || (string.length === 1 && string[0] === '8')) {
    c = 'eight';
}
else if ((string.length === 3 && string[2] === '9' && string[1] !== '1') || (string.length === 2 && string[1] === '9'&& string[0] !== '1') || (string.length === 1 && string[0] === '9')) {
    c = 'nine';
}
else if ((string.length === 3 && string[2] === '0') || (string.length === 2 && string[1] === '0')) {
    c = '';
}
else if (string.length === 1 && string[0] === '0') {
    c = 'zero';
}
if (a === '' && b === '') {
return `${c}`;
}
else if (a === '' && c === '') {
return `${b}`;
}
else if (b === '' && c === '') {
return `${a}`;
}
else if ( a === '') {
return `${b} ${c}`;
}
else if (b === '') {
return `${a} ${c}`;
}
else if (c === '') {
return `${a} ${b}`;
}
else {
return `${a} ${b} ${c}`;
}
};
