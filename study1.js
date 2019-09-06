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


