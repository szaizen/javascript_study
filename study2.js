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

/*
53. このような 'It is an important problem'と'The import duty is not cheap'の
文字列内importにマッチするとbooleanを返す記述をしてください
*/

const str = 'It is an important problem';
const str2 = 'The import duty is not cheap';

function textCheck(text) {
	return /.*\bimport\b.*/.test(text);
}

textCheck(str); // false
textCheck(str2); // true


/*
61.関数iiを実行すると返り値で関数を受け取り、
その関数に引数'home'を渡し実行すると'my home'と返ってくるクロージャーを作ってください
*/
var li = ( ()=>{
	return (value) => {
		console.log(`my ${value}`);
	}
});

var kk = li();

kk('home'); //my home

/*
62.今の時間、何時何分何秒を表してください
*/

var now = new Date();
console.log(`${now.getHours()}時${now.getMinutes()}分${now.getSeconds()}秒`);



