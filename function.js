function test(str){
	const DICT_PATH = "./dict";
	let tokens;
	let result = "";

	kuromoji.builder({dicPath: DICT_PATH}).build((err, tokenizer)=>{
		tokens = tokenizer.tokenize(str);// 解析データの取得

		tokens.forEach( function(token,index,array) {
			test += token.surface_form;
			if(index != array.length-1){
				test += ",";
			}
		});
		console.log(test);
	});
}

window.function = function (str) {
  return test(str);
}
