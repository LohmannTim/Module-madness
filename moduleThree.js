var moduleOne = require("./randomNumber.js")
                //randomNumber Function

var moduleTwo = require('./convertToDollars.js')
                //convertToDollars Function


function combineFirstTwo () {
     //moduleOne(100,1000000)

    //6000000
   var moduleOnePlusModuleTwo = moduleTwo(moduleOne(100,1000000));
    //$100,000

    return moduleOnePlusModuleTwo;
}

function addAccBalString () {
    addedText = 'Account balance'+ ': \n' + combineFirstTwo();
    return addedText;
}

module.exports = combineFirstTwo();
module.exports = addAccBalString();