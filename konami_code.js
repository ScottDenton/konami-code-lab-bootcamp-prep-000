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

function init() {
  // your code here
  
   
  var index = 0;
  
  function konami(event){
    var key = event.key;
   
    if (key === codes[index]){
      index ++;
      
     if (index === codes.length) {
        alert( 'Yay you did it !!!');
      }}
      
    else {  
      index = 0;
    }
  
  }
  function listener(){ 
     document.addEventListener('keydown', konami)
      }
}