// On addbtn click
// 1. Open form input that takes in title of the film, year of the film, director of the film, and cover image of film.
// 2. Turn addbtn into a X logo, which upon clicking will close the form and turn back to add logo
// 3. When form is submitted, the new film gets added to localStorage, recently added carousel, and carousel of the year it came out

// Variables
const addBtn = document.querySelector('.add-btn');
const formContainer = document.querySelector('.form-container');
const filmSubmitBtn = document.querySelector('.filmFormSubmit');


// Arrays
// let filmImgs = ['imgs/nble.webp'];

// Event listeners
addBtn.addEventListener('click', openFilmForm);
// filmSubmitBtn.addEventListener('click', addFilm);

// Functions
function openFilmForm() {
  if (!formContainer.classList.contains('open')) {
    formContainer.classList.add('open');
    addBtn.style.transform = "rotate(405deg)";
  } else {
    formContainer.classList.remove('open');
    addBtn.style.transform = "rotate(0deg)";
  }
}

function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

// Film class: Represents a film
class Film {
  constructor(title, year, director, image) {
    this.title = title;
    this.year = year;
    this.director = director;
    this.image = image;
  }
}

// UI class: Handles UI Tasks
class UI {
  static displayFilms() {
    const films = Store.getFilms();

    films.forEach((film) => UI.addFilmToList(film));
    films.forEach((film) => UI.createEl(film));
  }

  static addFilmToList(film) {
    const recentlyAdded = document.querySelector('.recently-added');
    // const dec2010 = document.querySelector('.dec2010');


    const div = document.createElement('div');
    div.classList.add('img');

    div.innerHTML = `
      <img src=${film.image} alt="">
    `;
    
    recentlyAdded.insertBefore(div, recentlyAdded.childNodes[0]);

    // if(Number(film.year) >= 2010) {
    //   const div = document.createElement('div');
    // div.classList.add('img');

    // div.innerHTML = `
    //   <a href="#recently-added"><img src=${film.image} class="poster poster1" alt=""></a>
    // `;
    //   dec2010.insertBefore(div, dec2010.childNodes[0]);
    // }
  }

  static createEl(film) {
    const div = document.createElement('div');
    div.classList.add('img');

    div.innerHTML = `
      <img src=${film.image} alt="">
    `;
    let num = Number(film.year);

    return num >= 2010 ? document.querySelector('.dec2010').insertBefore(div, document.querySelector('.dec2010').childNodes[0]) : num >= 2000 ? document.querySelector('.dec2000').insertBefore(div, document.querySelector('.dec2000').childNodes[0]) : num >= 1990 ? document.querySelector('.dec1990').insertBefore(div, document.querySelector('.dec1990').childNodes[0]) : num >= 1980 ? document.querySelector('.dec1980').insertBefore(div, document.querySelector('.dec1980').childNodes[0]) : num >= 1970 ? document.querySelector('.dec1970').insertBefore(div, document.querySelector('.dec1970').childNodes[0]) : num >= 1960 ? document.querySelector('.dec1960').insertBefore(div, document.querySelector('.dec1960').childNodes[0]) : num <= 1959 ? document.querySelector('.dec1950').insertBefore(div, document.querySelector('.dec1950').childNodes[0]) : console.log('not a year');
  }

  static clearFields() {
    document.querySelector('.film-title').value = '';
    document.querySelector('.film-year').value = '';
    document.querySelector('.film-director').value = '';
    document.querySelector('.film-image').value = '';
  }
}

// Store Class: Handles Storage
class Store {
  static getFilms() {
    let films;
    if(localStorage.getItem('films') === null) {
      films = [];
    } else {
      films = JSON.parse(localStorage.getItem('films'));
    }
      return films;
  }

  static addFilm(film) {
    const films = Store.getFilms();

    films.push(film);

    localStorage.setItem('films', JSON.stringify(films));
  }

}

// Events: Display Books
document.addEventListener('DOMContentLoaded', UI.displayFilms);

// Event: Add a Book
const filmForm = document.querySelector('.film-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();
  // Get form value
  const filmTitle = document.querySelector('.film-title').value;
const filmYear = document.querySelector('.film-year').value;
const filmDirector = document.querySelector('.film-director').value;
const filmImage = document.querySelector('.film-image').value;

  // Validate
  if(filmTitle === '' || filmYear === '' || filmDirector === '' || filmImage === '') {
    alert('Please fill in all fields');
  } else {
     // Instatiate book
  const film = new Film(filmTitle, filmYear, filmDirector, filmImage);

  // Add Book to UI
  UI.addFilmToList(film);

  // Add book to store
  Store.addFilm(film);

  // Show success message
  alert('Film added');

  // Clear fields
  UI.clearFields();

  // Adding to appropriate Decade
  UI.createEl(film);
  }
});















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