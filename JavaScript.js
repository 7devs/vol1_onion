
n func1() {
        console.log('...');
}
function func2(str) {
        console.log('str is', str);
}
var func3 = function(...args){
        console.log(args, func5());
            console.log('args.length = ', args.length);
}
var func4 = new Function('return 3;');
function func5(){
        return 4;
}

func1();
func2('some text');
func3(1,2,func4());
alert(func4());
alert(func5);
