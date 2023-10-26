const num = 3;

// もし変数numが3と5倍数の場合
if (num % 3 === 0 && num % 5 === 0){
  console.log('3と5の倍数です');
} 
// 変数numが3の倍数の場合
else if(num % 3 === 0){
  console.log('3の倍数です');
}
// 変数numが5の倍数の場合
else if(num % 5 === 0){
  console.log('5倍数です');
}
// それ以外は数字で出力
else{
  console.log(num);
}
