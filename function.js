function test(){
  const DICT_PATH = "./dict";
  let tokens;
	
  kuromoji.builder({dicPath: DICT_PATH}).build((err, tokenizer)=>{
    tokens = tokenizer.tokenize(str);// 解析データの取得
  });
	
  return tokens;
}

window.function = function (str) {
  return test(str);
}
