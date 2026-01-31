function hyoji18(){
  //表示する文字
var str18="目標:公式戦に登板する。";
  //テキストボックスの文字数
var cnt18=document.timer18.moji18.value.length;
//文字が全部表示されているか確認
  if (cnt18<11){
    //現在より１文字多く切り出して表示
    document.timer18.moji18.value=str18.substr(0,cnt18+1);}else{
    //すべて表示されたら、空文字に戻す
    document.timer18.moji18.value="";}
  //setTimeout()を含む関数を呼び出す
  setTimeout("hyoji18()",1000);}
