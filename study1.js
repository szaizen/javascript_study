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

