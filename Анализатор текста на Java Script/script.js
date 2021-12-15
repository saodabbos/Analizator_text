      'use strict';
    let text = document.querySelector('#text');
    let chek1 = document.querySelector('#chek1');
    let chek2 = document.querySelector('#chek2');
    let chek3 = document.querySelector('#chek3');
    let elem = document.querySelector('#elem');
    let c = 0;
    text.addEventListener('blur',function(){
            let str = String(text.value);
        if(chek1.checked){
            let arr = str.split('');
            for(let i of arr){
                if(i != ' '){
                    c ++;
                }
            }
            elem.innerHTML = ' Количество символов. Не учитывая пробелов: ' + c;
        }
        else if(chek2.checked){
            let arr = str.split(' ');
            for(let i of arr){
                if(i != ''){
                c ++;
                }
            } 
            elem.innerHTML = ' Количество слов : ' + c;
        }
        else if(chek3.checked){
            let arr = str.split('');
            for(let i of arr){
                c ++;
            }
            elem.innerHTML = ' Количество символов : ' + c;
        }
    })