function test(str){
  const DICT_PATH = "./dict";
  let tokens;
  let result;
	
  kuromoji.builder({dicPath: DICT_PATH}).build((err, tokenizer)=>{
    tokens = tokenizer.tokenize(str);// 解析データの取得
  });
	
  if(tokens){
    result = tokens.toString();
  }else{
    result = "だめぽ";
  }
	
  return result;
}

window.function = function (str) {
  return test(str);
}
