/*-------------------------------------------
*
*  JavaScript練習問題集
*  https://gist.github.com/kenmori/1961ce0140dc3307a0e641c8dde6701d
*
*  51問目から
*
*-------------------------------------------*/

/*
51.問50の変数fafa内にある要素を出力してください 
//期待する出力 //['one','info@fa'] //['two', 'send@fafa'] //['three', 'hoso@fafa']
*/

var entries = map.entries();

for(var entry of entries) {
	console.log(entry);
}

/*
52.'morita kenji'のような1つ以上の小英字、半角スペース、1つ以上の小英字にマッチした場合、
配列['morita kenji']が返るようにしてください。

*/

/\w+\s\w+/.exec('morita kenji');

