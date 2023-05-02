var fileName = 'logo.svg';

function generateLogo(data) {
console.log(data);
return `${fileName + data}`;
};
module.exports = generateLogo;
