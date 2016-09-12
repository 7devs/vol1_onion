function printDate(){
    var d = new Date();
    console.log(d.toString());
}

function printLine(){
    console.log('--------------------------------');
}

module.exports.printDate = printDate;
module.exports.printLine = printLine;

/*也可以这么写

module.exports.printDate = function(){
    var d = new Date();
    console.log(d.toString());
}

module.exports.printLine = function(){
    console.log('--------------------------------')
}
*/
