function henkou(){
    let i = document.createElement('li');
    i.textContent = 'ヨット';
    
    let ul = document.querySelector('ul#kazoeuta');
    ul.insertAdjacentElement('beforeend',i);
    
    i = document.createElement('li');
    ul.insertAdjacentElement('beforeend',i);
    i.textContent ='ごましお';
    
    let l = document.querySelector('img#bluemoon');
    l.setAttribute('src','bluemoon.jpg');
    
    let a = document.createElement('a');
    a.textContent='拓殖大学HP';
    a.setAttribute('href','https://www.takushoku-u.ac.jp');
    
    let p = document.querySelector('p#takudai');
    p.insertAdjacentElement('afterend',a);
    
    i = document.querySelector('li#mochi');
    ul = document.querySelector('ul#kassen');
    ul.remove();
    
    p = document.querySelector('p#primary');
    ul = document.createElement('ul');
    p.insertAdjacentElement('afterend', ul);
    
    i = document.createElement('li');
    ul.insertAdjacentElement('beforeend', i);
    i.textContent='赤';
    
    i = document.createElement('li');
    ul.insertAdjacentElement('beforeend', i);
    i.textContent='緑';
    
    i = document.createElement('li');
    ul.insertAdjacentElement('beforeend', i);
    i.textContent='青';
}
    p = document.querySelector('button#henkou');
    p.addEventListener('click',henkou);
    
    
    