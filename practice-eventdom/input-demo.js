function greeting(){
    let i = document.querySelector('input[name="shimei"]');
    shimei=i.value ;
    let p =document.querySelector('p#message');
    let aisatsu = 'こんにちは' + shimei + 'さん';
    p.textContent =aisatsu 
    console.log('こんにちわ');
  }

  let b = document.querySelector('button#print');
  b.addEventListener('click',greeting);