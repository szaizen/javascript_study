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







