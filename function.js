function test(str){
  const DICT_PATH = "./dict";
	
  kuromoji.builder({dicPath: DICT_PATH}).build((err, tokenizer)=>{
    return tokenizer.tokenize(str);// 解析データの取得
    
  });
}

window.function = function (str) {
  return test(str);
}
