const codes = [
  //"ArrowUp",
  38,
  //"ArrowUp",
  38,
  //"ArrowDown",
  40,
  //"ArrowDown",
  40,
  //"ArrowLeft",
  37,
  //"ArrowRight",
  39,
  //"ArrowLeft",
  37,
  //"ArrowRight",
  39,
  //"b",
  66,
  //"a"
  65
];

  
var index = 0;
  
function konami(event){
    var key = event.which;
    
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
  

    

