const home = document.querySelector('.home');

home.addEventListener('click', function() {

  const drpdwn = document.querySelector('.home .drpdown');
console.log(drpdwn)


  //1
  // if (!drpdwn){ return; }

  // console.log(drpdwn.style.display);
    
  // if (drpdwn.style.display === '' || drpdwn.style.display === 'none'){
  //   console.log('one');
  //   drpdwn.style.display = 'grid'
  // }else {
  //   console.log('two');
  //   drpdwn.style.display = 'none'
  // }


  //2
  // if (drpdwn && drpdwn.style.display === 'none'){
  //   drpdwn.style.display = 'grid'
  // }else if(drpdwn){
  //   drpdwn.style.display = 'none'
  // }

// 3
// if (drpdwn){
  
//   if (drpdwn.style.display === 'none'){
//     drpdwn.style.display = 'grid'
//   }else {
//     drpdwn.style.display = 'none'
//   }

// }


})