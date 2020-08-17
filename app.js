// Variables
const emailInp = document.querySelector('.email-input');
const sgnBtn = document.querySelector('.sgnBtn');
const registryBtn = document.querySelector('.registryBtn');
const navBar = document.querySelector('.nav-container');
const slideshow = document.querySelectorAll('.slideshow')
const nextArr = document.querySelectorAll('.next-arrow');
const lastArr = document.querySelectorAll('.last-arrow');
const imgs = document.querySelectorAll('.img');
const vid = document.querySelector('.off-vid');
const headerTxt = document.querySelector('.header-text');
const overlay = document.querySelector('.overlay');
const container = document.querySelector('.container');
const images = document.querySelectorAll('.poster');


{/* <iframe width="853" height="480" src="https://www.youtube.com/embed/sBmYRXKXffs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

// Array of vids;
let arr = ['https://www.youtube.com/embed/sBmYRXKXffs'];

let newIframe = document.createElement('iframe');
newIframe.setAttribute("src", `${arr[0]}`);
newIframe.classList.add('trailer');


function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

setAttributes(newIframe, {"frameborder": "0", "allow": "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"});

// Event Listeners
// registryBtn.addEventListener('click', signUp);
// signIn.addEventListener('click', logIn);
document.addEventListener('scroll', backgroundChange)
// slideshow.addEventListener('mouseover', revealArr);
// slideshow.addEventListener('mouseout', hideIt);
headerTxt.addEventListener('mouseover', playVid);
container.addEventListener('mouseover', stopVid);
newIframe.addEventListener('mouseout', removeElement);


// Functions

function backgroundChange() {
  if(document.documentElement.scrollTop >= 40) {
    navBar.classList.add('change');
  } else {
    navBar.classList.remove('change');
  }
}

let playcount = 0;
function playVid() {
  if (playcount < 1) {
    setTimeout(function() {
      vid.setAttribute("src", "https://www.youtube.com/embed/dMIrlP61Z9s?rel=0&autoplay=1&loop=1&controls=0&modestbranding=1&autohide=1&fs=0&HD=1&title=0&iv_load_policy=3"); }, 1000);
      playcount++;
      console.log(playcount);
  }
}

function stopVid() {
  if (playcount > 0) {
  setTimeout(function() {
      vid.setAttribute("src", "https://www.youtube.com/embed/dMIrlP61Z9s?rel=0&autoplay=0&loop=1&controls=0&modestbranding=1&autohide=1&fs=0&HD=1&title=0&iv_load_policy=3"); }, 1000);
      playcount--;
      console.log(playcount);
    }
}


for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener('mouseover', function () {
    for (let j = 0; j < images.length; j++) {
      let num = j;
      // let newOne = imgs[i].id;
    if (i === j) {
      console.log(num);
      newIframe.style.position = "absolute";
      imgs[i].after(newIframe);
    } else {
      console.log('nope');
    }
    }
  })
}

// for (let i = 0; i < imgs.length; i++) {
//   imgs[i].addEventListener('mouseout', function () {
//     for (let j = 0; j < images.length; j++) {
//       let num = j;
//       // let newOne = imgs[i].id;
//     if (i === j) {
//       console.log(num);
//       let element = document.querySelector(".trailer");
//       element.parentNode.removeChild(element);

//     } else {
//       console.log('nope');
//     }
//     }
//   })
// }

function removeElement() {
      let element = document.querySelector(".trailer");
      element.parentNode.removeChild(element);
}



function signUp() {
  if(emailInp.value === "") {
    console.log('fill in email');
  } else if (emailInp.value.includes("@")) {
    window.location.href = "http://127.0.0.1:5500/signup.html";
  }
}

for(let i = 0; i < nextArr.length; i++) {
  nextArr[i].addEventListener('mouseover', function() {
    nextArr[i].style.visibility = 'visible';
  })
}

for(let i = 0; i < lastArr.length; i++) {
  lastArr[i].addEventListener('mouseover', function() {
    lastArr[i].style.visibility = 'visible';
  })
}


for (let i = 0; i < slideshow.length; i++) {
  slideshow[i].addEventListener('mouseover', function() {
    for (let j = 0; j < nextArr.length; j++) {
      if (i === j) {
      nextArr[j].style.visibility = 'visible';
      }
    }
    for (let a = 0; a < lastArr.length; a++) {
      if (i === a) {
      lastArr[a].style.visibility = 'visible';
      }
    }
  })
  slideshow[i].addEventListener('mouseout', function() {
    for (let j = 0; j < nextArr.length; j++) {
      nextArr[j].style.visibility = 'hidden';
    }
    for (let a = 0; a < lastArr.length; a++) {
      lastArr[a].style.visibility = 'hidden';
    }
  })

}



// for (let i = 0; i < nextArr.length; i++) {
//   let amount = 0;
//   nextArr[i].addEventListener('click', function() {
//     for (let j = 0; j < slideshow.length; j++) {
//       if (i === j) {
//         console.log(amount);
//         if (amount >= -2015) {
//           amount -=  1008;
//           let translateAmt = `translateX( ${amount}px)`;
//           slideshow[j].style.transform = translateAmt;
//           slideshow[j].style.transition = '.8s all ease-in-out';
//           slideshow[j].style.overflow = 'visible';
//         }
//       }
//     }
//   })
//   for (let i = 0; i < lastArr.length; i++) {
//     lastArr[i].addEventListener('click', function() {
//       for (let j = 0; j < slideshow.length; j++) {
//         if (i === j) {
//           console.log(amount);
//           if (amount <= -1) {
//             amount += 1008;
//             let translateAmt = `translateX( ${amount}px)`;
//             slideshow[j].style.transform = translateAmt;
//             slideshow[j].style.transition = '.8s all ease-in-out';
//             slideshow[j].style.overflow = 'visible';
//           }
//         }
//       }
//     })
//   }
// }




for (let i = 0; i < nextArr.length; i++) {
  nextArr[i].addEventListener('click', function() {
    for (let j = 0; j < slideshow.length; j++) {
      if (i === j) {
        let val = window.getComputedStyle(slideshow[j]).getPropertyValue('transform');
        let newVal  = val.slice(19, 24);
        // newVal = Number(newVal);
        console.log(newVal);
        let stove = -1008;
        let start = -1008;
        if (Number(newVal) <= -2015) {
          console.log('yup');
        }
        else if (newVal <= 0) {
          let start1 = `translateX( ${Number(newVal) + start}px)`;
          slideshow[j].style.transform = start1;
          slideshow[j].style.transition = '.8s all ease-in-out';
          slideshow[j].style.overflow = 'visible';

        } else {
          let startOver = `translateX(${stove}px)`;
          slideshow[j].style.transform = startOver;
          slideshow[j].style.overflow = 'visible';
        }
        
      }
    }
  })
}

for (let i = 0; i < lastArr.length; i++) {
  lastArr[i].addEventListener('click', function() {
    for (let j = 0; j < slideshow.length; j++) {
      if (i === j) {
        let val = window.getComputedStyle(slideshow[j]).getPropertyValue('transform');
        let newVal  = val.slice(19, 24);
        // newVal = Number(newVal);
        console.log(newVal);
        let start = -1008
        let start1 = `translateX( ${Number(newVal) - start}px)`;
        if (newVal < 0) {
          slideshow[j].style.transform = start1;
          slideshow[j].style.overflow = 'visible';
        } else {
          console.log('greater than zero');
        }
        

      }
    }
  })
}



class Films {
  constructor(name, director, year) {
    this.name = name;
    this.director = director;
    this.year = year;
  }
}

Films.prototype.info = function() {
  alert(`${this.name}, a film directed by ${this.director}, originally bombed at the box office in ${this.year}, however the film saw later success with popularity rising with the next generation of viewers. ${this.name} is now considered a cult classic.`);
}

let film1 = new Films('The Big Lebowski', 'The Coen Brothers', 1992)

// film1.info();