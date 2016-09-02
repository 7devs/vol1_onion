//function用法
//(...args)表示任意数量的数组
var func3 = function(...args){
//args调用function(...args)
    console.log(args,func5());
    console.log('args.length = ',args.length);
}
var func4 = new Function('return 3')
function func5(){
    return 4;
}

func3(1,8,99,"at",func4());
//Console 中执行后返回的结果是 [1,8,99,"at",3] 4 args.length = 5



