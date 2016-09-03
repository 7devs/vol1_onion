
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


//function
//(...args)代表任意数量的数组
var func3 = function(...args){
//args调用function(...args)
    console.log(args,func5());
    console.log('args.length = ',args.length);
}
var func4 = new Function(return 3)
function func5(){
    return 4;
}

func3(1,8,99,"at",func4());
//Console中执行后返回的是 [1,8,99,"at",3] 4 args.length = 5


