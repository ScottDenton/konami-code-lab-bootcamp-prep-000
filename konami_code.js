const codes = [ 38, 38, 40, 40, 37, 39, 37, 39, 66, 65
];

function init() {
  
  var listener = document.addEventListener('keydown', konami)
  
  var index = 0;
  
  function konami(event){
    var key = event.key;
    
    if (key === codes[index]){
      index ++;
      
      if(index === codes.length) {
        alert( 'Yay you did it !!!');
      }
    } else {   //reset the index to the start again if wrong key pressed
      index = 0;
      
    }
  
  
}
}
  init();