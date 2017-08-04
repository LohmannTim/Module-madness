
function convertToDollars (number) {

    var number = '$' + Number(parseFloat(number).toFixed(2)).toLocaleString('en', {
       minimumFractionDigits: 2
       
   });
   return number; 
}

module.exports = convertToDollars;