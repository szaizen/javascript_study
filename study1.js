/*-------------------------------------------
*
*  JavaScript練習問題集
*  https://gist.github.com/kenmori/1961ce0140dc3307a0e641c8dde6701d
*
*-------------------------------------------*/

/*
1.const a = { a: 'a' }とconst b = { b: 'b' } をマージしたc を出力してください e.g{ a:'a', b:'b' }
*/

const a = { a: 'a' }
const b = { b: 'b' }
const c = Object.assign(a,b);
c //{a: "a", b: "b"}


/*
2.const arry = ['aa','bb','cc','dd','ee','ff','gg'];
のdd,ee,ffを新たな配列として返してください
*/

const arry = ['aa','bb','cc','dd','ee','ff','gg'];
arry.slice(3,6); // ["dd", "ee", "ff"]


/*
3.['a','b’] の要素をconsole出力してください e.g 'a'と'b'
*/

const arry = ['a','b'];

arry[0]
arry[1]

// or

arry.forEach(function(val){
  console.log(val);
})

/*
4.['a', 'b']の各要素にindex値を足した文字列を出力してくださいe.g 'a0'と'b1'
*/

const arry = ['a','b'];

arry.forEach(function(value, index){
  console.log(value + index);
})

// a0
// b1

/*
5.任意の変数名の[1,2]を定義して配列かどうかを評価してください e.g true
*/

const arry = [1,2];
Array.isArray(arry); // true


/*
8.
下記

const obj = {
 key: 'aa',
 key2: 'bb'
}
の中のkeyとvalueを自身のプロパティのみ全て出力しなさい

*/

const obj = {
 key: 'aa',
 key2: 'bb'
}

Object.values(obj).forEach(function(val){
  console.log(val);
})

// or

for (var key in obj) {
   if(obj.hasOwnProperty(key)){

        console.log(key, obj[key]);

    }
}

//key aa
//key2 bb


/*
9.こちらの ['a', 'b', 'c'] 配列の中の全ての要素を結合し、1つの文字列として出力してください。
*/

const arry = ['a', 'b', 'c'];
let text = '';

arry.forEach(function(value){
  text += value;
});

text // "abc"

// or

arry.join("");


/*
11.
let arry =[
  {id:1,name:'morita'},
  {id:2,name:'kenji'},
  {id:4,name:'uro'},
  {id:3,name:'ken'}
];
をid番号が若い順にソートしたオブジェクトを含む配列を出力してください
*/

let arry =[
  {id:1,name:'morita'},
  {id:2,name:'kenji'},
  {id:4,name:'uro'},
  {id:3,name:'ken'}
];

arry.sort(function(a,b){
 if(a.id > b.id) return 1;
 if(a.id < b.id) return -1;
});


/*
12.
a, bの変数はデフォルトとしてaは5、bは7を持ち、aに1を代入してconsole出力してください。
*/

const [a=5, b=7] = [1]

a // 1


/*
13.next()を実行しただけ返り値が1増える関数を定義してください
*/

let count = 0;
function next() {
  return count += 1;
}

next(); //1
next(); //2

/*
14.
fun(1,2,3)を実行したら引数が全て配列で返る関数funを定義しなさい
*/

function fun(a,b,c) {
  return new Array(a,b,c);
}

fun(1,2,3) //[1,2,3]

// or

function fun (...arg){
  return arg;
}


/*
15.
配列
const array = ['a1','a2','a3','a4','a5']
の0〜2番目の要素をそれぞれ
red, green, yellow
に置き換えて配列にしてください。また実行した際の返り値を教えてください
*/

const array = ['a1','a2','a3','a4','a5'];

array[0] = 'red';
array[1] = 'green';
array[2] = 'yellow';

array // ["red", "green", "yellow", "a4", "a5"]



/*
16.
const array = ['a1','a2','a3','a4','a5']
のインデックス2〜4の要素を取り出し、 配列として出力しなさい。 
*/

const array = ['a1','a2','a3','a4','a5']
array.slice(1,4);



/*
17.
const array = ['a1','a2','a3','a4','a5']
の全ての要素を"/"で結合した文字列を出力し、さらにその文字列を'/'区切りで配列に直してください
*/


var text = array.join('/');
text; // "a1/a2/a3/a4/a5"

text.split('/'); //["a1", "a2", "a3", "a4", "a5"]



/*
18.配列['おはよう','こんにちは','おやすみなさい']の要素がランダムに出力される関数を書いてください。
(配列に要素が追加される事を仮定してたものにしてください)
*/

const array = ['おはよう','こんにちは','おやすみなさい'];

function random() {
  let random = Math.floor(Math.random() * 3);
  console.log(array[random]);
}

random(); // おはよう or こんにちは or おやすみなさい


/*
19.Object.createで空のオブジェクトを作成し、値が1のプロパティpを出力してください
*/

const obj = Object.create({}, {p: {value: 1}});
obj.p //1


/*
20.
コンストラクタWhoの初期化時に'morita'(String)を渡しインスタンスプロパティnameに代入、
インスタンスメソッドgetNameの返り値がWho.prototype.name値になる
いわゆる「classのようなもの」を作成してください 
※インスタンスメソッドはprototypeに代入してください
*/

function Who(name){
  this.name = name;
};

Who.prototype.getName = function() {
  console.log('Myname is ' + this.name);
}

let o = new Who('morita');

o.getName(); // Myname is morita


/*
21.浅いコピー(shallow copy)と深いコピー(deep copy)の違いを説明してください
*/

/*
shallow copy
参照元のオブジェクトとコピー先のオブジェクト
どちらも同じメモリを参照していること

deep copy
オブジェクトのみのコピーではなく、
オブジェクトとメモリ上のデータの両方をコピー
*/


/*
22.
['B', 'a', 'c', 'e', 'k']
上記の配列を大文字小文字区別なく順番通りにしてください。
期待する値['a','B','c', 'e','k']
*/

array.sort(function(a,b){

  a = a.toString().toLowerCase();
  b = b.toString().toLowerCase();

  if(a < b) {
    return -1;
  } else if(a > b) {
    return 1;
  }
  return 0;
});


/*
23.
このような[20,100,3,35,0]
比較する配列の要素が数値の場合、「降順」にsortしてください 
期待する結果[100, 35, 20, 3, 0]
*/

array.sort(function(a,b){
  return a < b ? 1 : -1;
});


/*
24.
文字列 '10'をNumber型にし、型判定し、数値かどうか評価後、文字列に変換してください
*/

let temp = '10';
Number(temp); // 数値に変換
temp = typeof(temp) === 'number' ?  String(temp) : temp; // 型判定し、数値の場合文字列に変換

/*
25.
カーリー化されたadd(1)(2)もしくはadd(1,2) を実行した際両方とも返り値3になる関数を定義しなさい。
*/

var add = function (a,b) {
  if(typeof b == 'undefined') { // 部分適用
    return function(b) {
      return a + b;
    }
  }
  return a + b; //完全適用
};

add(1)(2); // 3
add(1,2);  // 3

/*
26.
クロージャーを使ったファクトリー関数。

var fafa = Factory('morita');
fafa.introduce()
//'morita'
上記のような実行をしたら渡したname(ここではmorita)が表示されるメソッドintroduceを持つファクトリー関数を定義しなさい。

*/
function Factory(name) {
    function getName() {
        return name;
    };
    return {
        introduce : function() {
            console.log(getName());
        }
    }
};

const fafa = Factory('morita');
fafa.introduce() //morita

/*
33.
let arr = ['2','23','0','16'];
を小さい順にソートしてください。
その後ソートをできないようにread-onlyにしてください
*/

let arr = ['2','23','0','16'];
arr.sort(function(a,b){ return a > b ? 1 : -1 });
Object.freeze(arr);
arr.sort();

/*
34.
var arr = [3,4,5];をconcat以外で新たな配列としてarr2にコピーしてください。
その後arr2[0]= 123を代入するとarrは何を出力するか答えなさい
*/

var arr = [3,4,5];
let arr2 = arr.slice(0, arr.length);

/*
35.
こちらは2つのパラメーターを足して返すgetSum関数です。
const getSum = (a, b) => a + b
このパラメーターに何もわたってこなかった場合Errorをスローすようにしてください
期待する結果 getSum(10) //throws b is not defined getSum(undefined, 10) //throws a is not defined
*/


const _error = function(message) {
    throw new Error(message);
};
const getSum = (a = _error('a is not defined'), b = _error('b is not defined') ) => a + b


/*
39.
配列var arr = ['f','o','x','k'];をインデックス順に出力させてください
*/

arr.forEach((el) => {
	console.log(el);
});


/*
40. またイテレーターを使い順番に出力してください
var arr = ['f', 'o', 'x', 'k'];
var iterator = arr.values();
*/

iterator.next().value; // f
iterator.next().value; // o
iterator.next().value; // x
iterator.next().value; // k

/*
41.配列['a', 'b', 'c', 'd', 'e'] のインデックス2番目に'morita'という要素を加えなさい。
期待する結果['a', 'b','morita', 'c', 'd', 'e']
*/

var array = ['a', 'b', 'c', 'd', 'e'];
array.splice(2,0,'morita');
array //  ["a", "b", "morita", "c", "d", "e"]

/*
42.これvar o = {};と同じ意味を持つコードをObjectのAPIを使って生成してください
*/

var o = Object.create(Object.prototype);

