(function(){
    'use strict';
    const botan = document.getElementById('tin');
    const yau = document.getElementById('you');
    const kekka = document.getElementById('kekkaArea');

         
    
    function removeAllChildren(element) {
        while (element.firstChild) { 
            element.removeChild(element.firstChild);
        }
    };
       
    
    
    botan.onclick = function() { 
        {
     var Name = yau.value;
    }
    if(Name.length === 0){
    return;
    }
    removeAllChildren(kekka); 
     if(Name === '織田信長'　| Name === '織田くん' | Name === '信ちゃん'){
    const seikai = document.createElement('h3');
    seikai.innerText = '正解！天才だねえ';   
    kekka.appendChild(seikai)
     }
     else{
    const huseikai = document.createElement('h3');
    huseikai.innerText = 'ちげーよバーカ';
    kekka.appendChild(huseikai)
     }
     
    };

})();
