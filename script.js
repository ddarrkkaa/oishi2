let header = document.getElementById("header-id");

let menu = document.querySelector(".header-menu");
let buttonText = document.querySelector(".button");
let Oishii = document.querySelector(".logo");

function changeTextColorOnScroll() {
    let brightness = window.scrollY > 0 ? 0 : 1; 
    Oishii.style.filter = `brightness(${brightness})`;

    let Color = window.scrollY > 0 ? "black" : "white" ;
    let ColorR = window.scrollY > 0 ? "#942828" : "white" ;
    let ColorB = window.scrollY > 0 ? "white" : "#942828" ;

    menu.style.color = Color;
    buttonText.style.color = Color; 
    buttonText.style.borderColor = ColorR;
    header.style.backgroundColor = ColorB;
    header.style.borderColor = Color;


}

window.addEventListener("scroll", changeTextColorOnScroll);

 
document.addEventListener("DOMContentLoaded", function() {
  let Title = document.getElementById("berries")
  let Options = document.getElementById("berries-o");


    Title.addEventListener("mouseenter", function() {
        Options.style.display = "block";
        Options.style.top = (Title.offsetTop + Title.offsetHeight) + "px";
        Options.style.left = Title.offsetLeft + Title.offsetWidth / 2 - Options.offsetWidth / 2 + "px";
    });

    Options.addEventListener("mouseleave", function() {
        Options.style.display = "none";
    });
});
 
document.addEventListener("DOMContentLoaded", function() {
  let Title = document.getElementById("learn");
  let Options = document.getElementById("learn-o");


    Title.addEventListener("mouseenter", function() {
        Options.style.display = "block";
        Options.style.top = (Title.offsetTop + Title.offsetHeight) + "px";
        Options.style.left = Title.offsetLeft + Title.offsetWidth / 2 - Options.offsetWidth / 2 + "px";
    });

    Options.addEventListener("mouseleave", function() {
        Options.style.display = "none";
    });
});

const button = document.getElementById('my-button');
button.addEventListener('mouseover', function() {
  this.style.backgroundColor = "#942828";
  this.style.color = "white"
});
button.addEventListener('mouseout', function() {
  this.style.backgroundColor = '';
  this.style.color = '';
});

document.addEventListener('DOMContentLoaded', function() {
  // Получаем элементы видео и кнопок
  var video = document.querySelector('.video-player');
  var playButton = document.getElementById('playButton');
  var muteButton = document.getElementById('muteButton');

playButton.addEventListener('click', function() {
  if (video.paused) {
    video.play();
    playButton.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 4L18 12L6 20V4Z" fill="white"/>
      </svg>
    `;
  } else {
    video.pause();
    playButton.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 5V19L19 12L8 5Z" fill="white"/>
      </svg>
    `;
  }
});
muteButton.addEventListener('click', function() {
  if (video.muted) {
    video.muted = false;
    muteButton.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 9H3V15H5L9 19V5L5 9ZM18 12C18 14.77 15.77 17 13 17C10.23 17 8 14.77 8 12H6C6 15.87 9.13 19 13 19C16.87 19 20 15.87 20 12H18Z" fill="white"/>
      </svg>
    `;
  } else {
    video.muted = true;
    muteButton.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 9H3V15H5L9 19V5L5 9ZM18 12C18 14.77 15.77 17 13 17C10.23 17 8 14.77 8 12H6C6 15.87 9.13 19 13 19C16.87 19 20 15.87 20 12H18ZM15 9.41L16.41 8L20 11.59L23.59 8L25 9.41L21.41 13L25 16.59L23.59 18L20 14.41L16.41 18L15 16.59L18.59 13L15 9.41Z" fill="white"/>
      </svg>
    `;
  }
});
});
