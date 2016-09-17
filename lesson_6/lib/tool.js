function printDate(){
    var d = new Date();
    console.log(d.toString());
};

function printLine(){
    console.log('........................................')
};

module.exports.printLine = printLine;
module.exports.printDate = printDate;
