function test(str){
	const DICT_PATH = "./dict";
	let tokens;
	let result = "";

	kuromoji.builder({dicPath: DICT_PATH}).build((err, tokenizer)=>{
		tokens = tokenizer.tokenize(str);// 解析データの取得

		tokens.forEach( function(token,index,array) {
			result += token.surface_form;
			if(index != array.length-1){
				result += ",";
			}
		});
		return result;
	});
}

window.function = function (str) {
  return test(str);
}
