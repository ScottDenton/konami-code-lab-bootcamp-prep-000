const codes = [
  "ArrowUp",
  
  "ArrowUp",
  
  "ArrowDown",
  
  "ArrowDown",
  
  "ArrowLeft",
  
  "ArrowRight",
  
  "ArrowLeft",
  
  "ArrowRight",
  
  "b",
  
  "a"
  
];

  function init(){
var index = 0;
  
function konami(event){
    var key = event.key;
    debugger
    if (key === codes[index]){
      index ++;
      
      if(index === codes.length) {
        alert( 'Yay you did it !!!');
        index = 0;
      }
    } else {   
      index = 0;
      
    }
  }
  
  document.addEventListener('keydown', konami)
  

  }    
  
  

