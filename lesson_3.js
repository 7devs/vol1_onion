//JavaScript 对象，访问对象的属性和方法，直接赋值是对象属性，加括号()是调用方法
function person(firstname,lastname,age,eyecolor)
{
    this.fname=firstname;
    this.lname=lastname;
    this.age=age;
    this.eyecolor=eyecolor;

    this.changeName=x;
    function x(y)
    {
        this.lname=y;
    }
}
myfriend=new person("Steve","Jobs",26,"green");
myfriend.changeName("Ballmer")
//myfriend.lname 是 Ballmer,上面 changeName 是访问对象的方法


//一个对象可以有多个属性
person=new Object();
person.fname="Bill";
person.lname="Gates";
persen.age=27;
//以上还有另外一种代替语法
penson={
    fname:"Bill",lname:"Gates",age:27
};



//for in 循环，遍历对象的属性
var x;
var a=""
var person={"Steve","Jobs",26,"green"};
for (x in person)
{
    a=a + person[x]
}
//返回：SteveJobs26green



//toString()注意事项，对象可以是数组或者布尔值
var a = [97,7,8,"17"];
a.toString();
//"97,7,8,17"
var a = new Array(97,7,8,"17");
a.toString();
//"97,7,8,17"
var a = new Array(97,"m",8,"17");
a.toString();
//"97,m,8,17"
var a = 123e5;
a.toString();
//"12300000"
var a = true；
a.toString();
//"true"
var a = false;
a.toString();
//"false"



//toFixed(),对象只能是数字，不能是数组或者布尔值，括号内是0~20之间的值
var a = 2.8854;
a.toFixed(2);
//"2.89"
var a = [2.8444,9.001,80.356];
a.toFixed(2）
//Uncaught TypeError: a.toFixed is not a function(…)(anonymous function)
var a = 2.80354;
a.toFixed(2);
//"2.80"
var a = 2.80354;
a.toFixed(0);
//"3"
var a = 2.80354;
a.toFixed(0.4);
//"3"
var a = 2.80354;
a.toFixed(0.9);
//"3"
var a = 2.80354;
a.toFixed(2.9);
//"2.80"
var a = ture;
a.toFixed(2);
//Uncaught ReferenceError: ture is not defined(…)




//toExponential(num)，把对象转为科学计数法。返回的结果以字符串表示，括号内是0~20之间的值，num规定指数计数法中的小数位
var a = 0.210976;
a.toExponential(3);
//"2.110e-1"
var a = 109.76;
a.toExponential(3);
//"1.098e+2"
var a = 109.76;
a.toExponential(3.8);
//"1.098e+2"
var a = 109.76;
a.toExponential(3.1);
//"1.098e+2"
var a = 109.76;
a.toExponential();      //注意
//"1.0976e+2"
var a = 109.76;
a.toExponential(6);
//"1.097600e+2"
var a = 109.7697544;
a.toExponential();      //注意
//"1.097697544e+2"




//toPrecision(),语法：NumberObject.toPrecision(num),返回 NumberObject 的字符串表示，包含 num 个有效数字，num为1~21之间的值
a = 1376553;
a.toPrecision(8);
//"1376553.0"
a = 1376553;
a.toPrecision(10);
//"1376553.000"
a = 1376553;
a.toPrecision(1);
//"1e+6"
a = 1376553;
a.toPrecision(4);
//"1.377e+6"
a = 1376553;
a.toPrecision();        //注意
//"1376553"
a = 137655307766554443333568877665543333333;
a.toPrecision();        //注意
//"1.3765530776655444e+38"
a = 137655307766554443333568877665543333333;
a.toPrecision();        //注意
//"1.3765530776655444e+38"
a = 137655307766554443333568877665543;
a.toPrecision();        //注意
//"1.3765530776655445e+32"
a = 13765530776655444333356887766554;
a.toPrecision();        //注意
//"1.3765530776655444e+31"
a = 176443;
a.toPrecision(4);
//"1.764e+5"
a = 176443;
a.toPrecision(3);
//"1.76e+5"
a = 137655307766554443333;
a.toPrecision();        //注意
//"137655307766554440000"





//MAX_VALUE属性，MIN_VALUE属性，NEGATIVE_INFINITY属性，POSITIVE_INFINITY属性
//MAX_VALUE属性是 JavaScript 中可表示的最大的数
Number.MAX_VALUE;
//1.7976931348623157e+308   //JavaScript 中可表示的最大的数
var b = 34.374765876;
b.MAX_VALUE;
b
//34.374765876
var b = [346,34.374765876,99];
b.MAX_VALUE;
b
//[346, 34.374765876, 99]
var b = [346,34.374765876,99,"u"];
b.MAX_VALUE;
b
//[346, 34.374765876, 99, "u"]
var b = null;
b.MAX_VALUE
b
//Uncaught TypeError: Cannot read property 'MAX_VALUE' of null(…)

Number.MIN_VALUE;
//5e-324        //JavaScript 中可表示的最小的数


var x = Number.NEGATIVE_INFINITY;
b = 9;
b/x
//-0        //注意
var x = Number.NEGATIVE_INFINITY;
b = -9;
b/x
//0         //注意
x 
//-Infinity  可以用 -Infinity 代替 Number.NEGATIVE_INFINITY
//JavaScript 显示 NEGATIVE_INFINITY 时使用的是 -Infinity。这个值的算术行为和无穷大非常相似。例如，任何数乘无穷大结果仍为无穷大，任何数被无穷大除的结果为 0。
//Infinity 可以代替 Number.POSITIVE_INFINITY



//match()方法,match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
//该方法类似 indexOf() 和 lastIndexOf()，但是它返回指定的值，而不是字符串的位置。
a = "Hello World";
a.match("h")
//null
a.match("H")
//["H"]
a.match(" ")
//[" "]
//replace()方法
a.replace(/World/,"Girls");
//"Hello Girls!"
a.replace(/world/,"Girls");
//"Hello World!"        //注意
a.replace(/ /,"Girls");
//"HelloGirlsWorld!"    //注意


//String 对象方法，charAt(),返回指定位置的字符
a = "Hello World!"
a.charAt(5);
//" "
a.charAt(6);
//"W"
a.charAt(0);
//"H"
a.charAt(13);
//""            //注意
a.charAt(19);
//""            //注意
a.charAt(null); 
//"H"           //注意
a.charAt(" ");
//"H"           //注意
a.charAt("");
//"H"           //注意
a.charAt();
//"H"           //注意





//search()方法，search() 方法不执行全局匹配，它将忽略标志 g。它同时忽略 regexp 的 lastIndex 属性，并且总是从字符串的开始进行检索，这意味着它总是返回 stringObject 的第一个匹配的位置。
var a = "Hello World !";
a.search("o");          //注意
//4
var a = "Hello World !";
a.search(/o/);
//4
var a = "Hello World !";
a.search(/h/);
//-1
var a = "Hello World !";
a.search(/ /);
//5
var a = "Hello World !";
a.search(/null/);
//-1
var a = "Hello World !";
a.search(/w/i);         //search() 对大小写敏感，加 i 忽略大小写
//6                     
var a = "Hello World !";
a.search(/w/);
//-1
var a = "Hello World !";
a.search("w");
//-1
var a = "Hello World !";
a.search("w"i);         //注意
//Uncaught SyntaxError: missing ) after argument list





//slice(stard,end),返回值为一个新的字符串。包括字符串 stringObject 从 start 开始（包括 start）到 end 结束（不包括 end）为止的所有字符
var a = "It's a beautiful Sunday!"
a.slice(2,6)
//"'s a"
var a = "It's a beautiful Sunday!"
a.slice(2)
//"'s a beautiful Sunday!"
var a = "It's a beautiful Sunday!"
a.slice(-2,6)
//""
var a = "It's a beautiful Sunday!"
a.slice(-2,-3)
//""
var a = "It's a beautiful Sunday!"
a.slice(-2,-7)
//""
var a = "It's a beautiful Sunday!"
a.slice(-9,-7)
//"l "
var a = "It's a beautiful Sunday!"
a.slice(-9,10)
//""
var a = "It's a beautiful Sunday!"
a.slice(-9,15)
//""
var a = "It's a beautiful Sunday!"
a.slice(-9,19)
//"l Su"



//split()方法用于把一个字符串分割成字符串组
var a = "It's a beautiful Sunday!";
a.split("f");
//["It's a beauti", "ul Sunday!"]
a = "It's a beautiful Sunday!";
a.split("f",3);
//["It's a beauti", "ul Sunday!"]
a = "It's a beautiful Sunday!";
a.split("f",4);
//["It's a beauti", "ul Sunday!"]
a = "It's a beautiful Sunday!";
a.split("a",4);
//["It's ", " be", "utiful Sund", "y!"]
a = "It's a beautiful Sunday!";
a.split("a",3);
//["It's ", " be", "utiful Sund"]
a = "It's a beautiful Sunday!";
a.split("9",3);
//["It's a beautiful Sunday!"]
a = "It's a beautiful Sunday!"; //注意
a.split("",3);
//["I", "t", "'"]
a = "It's a beautiful Sunday!";
a.split("m",3);                 //注意
//["It's a beautiful Sunday!"]
a = "It's a beautiful Sunday!";
a.split("I",3);                 //注意
//["", "t's a beautiful Sunday!"]




//Array 的 length 属性
//设置 length 属性可改变数组的大小。如果设置的值比其当前值小，数组将被截断，其尾部的元素将丢失。如果设置的值比它的当前值大，数组将增大，新的元素被添加到数组的尾部，它们的值为 undefined。
var arr = new Array(3);
arr[0] = 9;
arr[1] = 8;
arr[2] = 7;
arr.length
//3
var arr = new Array(2);
arr[0] = 9;
arr[1] = 8;
arr[2] = 7;
arr.length
//3
var arr = new Array(2);
arr[0] = 9;
arr[1] = 8;
arr[2] = 7;
arr.length=5;
arr
//[9, 8, 7, undefined × 2]      //注意
var arr = new Array(2);
arr[0] = 9;
arr[1] = 8;
arr[2] = 7;
arr.length=4;
arr
//[9, 8, 7, undefined × 1]      //注意
var arr = new Array();
arr[0] = 9;
arr[1] = 8;
arr[2] = 7;
arr.length
//3
var arr = new Array(2);
arr[0] = 9;
arr[1] = 8;
arr[2] = 7;
arr.length=2;

2
arr
//[9, 8]                        //注意






//Array 的 concat(方法)
var a = [0,1,9];
var b = "Hello World!";
a.concat(b);
//[0, 1, 9, "Hello World!"]
var a = [0,1,9];
var b = "Hello World!";
b.concat(a);
//"Hello World!0,1,9"
var a = [0,1,9];
var b = "Hello World!";
var c = ""
b.concat(a,c);
//"Hello World!0,1,9"
var a = [0,1,9];
var b = "Hello World!";
var c = ""
c.concat(a,b);
//"0,1,9Hello World!"
var a = [0,1,9];
var b = "Hello World!";
var c = "";
var d = null;
c.concat(a,b,d);
//"0,1,9Hello World!null"       注意
var a = [0,1,9];
var b = "Hello World!";
var c = "";
var d = null;
d.concat(a,b,c);
//Uncaught TypeError: Cannot read property 'concat' of null(…)(anonymous function) @ VM3522:5
var a = [0,1,9];
var b = "Hello World!";
var c = "";
var d = null;
a.concat(a,b,d);
//[0, 1, 9, 0, 1, 9, "Hello World!", null]      注意
var a = [0,1,9];
var b = "Hello World!";
var c = "";
var d = null;
a.concat(c,b,d,e);
//[0, 1, 9, "", "Hello World!", null, undefined]
var a = [0,1,9];
var b = "Hello World!";
var c = "";
var d = null;
var e = true;
a.concat(c,b,d,e);
//[0, 1, 9, "", "Hello World!", null, true]
var a = [0,1,9];
var b = "Hello World!";
var c = "";
var d = null;
var e = true;
e.concat(c,b,d,a);
//Uncaught TypeError: e.concat is not a function(…)








