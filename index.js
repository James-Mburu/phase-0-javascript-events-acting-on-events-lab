
const dodger = document.getElementById('dodger')
dodger.style.backgroundColor = "#FF69B4"
//     function moveDodgerLeft(){
//         dodger.style.left = "100px"
// }


//     function moveDodgerRight(){
//         var left = dodger.style.left
//         left = parseInt(left)
//         left = parseInt(left)

//         var newPosition = dodger.style.right
//         newPosition = parseInt(newPosition)
    
//     }

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight(){
    var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10)
  if (left >100) {
    dodger.style.left = `${left + 1}px`
  }
}