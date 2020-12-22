var card =  document.getElementById('activator');

var tl =  gsap.timeline({defaults: {ease: "power2.inOut"}})

var toggle = false;

tl.to('.activator', {
  background: '#805ad5',
    'borderRadius': '50% 50% 0 0',
    'transform': 'translateY(4px)'
})
tl.to('nav', {
  'clipPath': 'ellipse(50% 200% at 50% 50%)'
}, '0.5s')
tl.to('nav li a i', {
  opacity: 1,
  transform: 'translateY(0)',
  stagger: 0.005
})
tl.pause();

card.addEventListener('click', () => {
  toggle = !toggle;
  if (toggle ? tl.play() : tl.reverse());
})


























// const home = document.querySelector('.home');

// home.addEventListener('click', function() {

//   const drpdwn = document.querySelector('.home .drpdown');
// console.log(drpdwn)


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


// })