
// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する

// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

let b = document.querySelector('button#s');
b.addEventListener('click',hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let w= document.querySelector('input[name="Input"]');
  let yoso = Number(w.value);
  let p= document.querySelector('span#answer');
  p.textContent = yoso;
  


  
  // 課題3-1: 正解判定する
  kaisu=kaisu+1;
  let i = document.querySelector('span#kaisu');
  i.textContent =  kaisu;

 let n= document.querySelector('p#result');
if(kaisu>=4){
  n.textContent=  ("答えは "+kotae+" でした．すでにゲームは終わっています");

  }

else if(kotae===yoso){
    n.textContent=("正解です．おめでとう!");
    kaisu=kaisu+4;
}
else if(kotae!==yoso){
    if(kaisu===3){
      n.textContent=("まちがい．残念でした答えは "+kotae+" です");
}
else if(kaisu<=2 && yoso<kotae){
  n.textContent=("まちがい．答えはもっと大きいですよ");
    }
else if(kaisu<=2 && yoso>kotae){
  n.textContent=("まちがい．答えはもっと小さいですよ");
    }
}
}

  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
