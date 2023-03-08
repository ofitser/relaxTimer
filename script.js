const buttonArea = document.querySelector('.btn-area')
const progressArea = document.querySelector('.progress-area')
const completeArea = document.querySelector('.complete-area')
const mainBtn = document.querySelector('.main-btn rect')
const frameBtn = document.querySelector('.frame-btn rect')
const loadingIcon = document.querySelector('.progress-area .area-left svg')
const loadingProgress = document.querySelector('.progress-area .area-left span')
const loadingBtn = document.querySelector('.progress-area .area-right')
const pauseBtn = document.querySelector('.progress-area .area-right .btn-pause')
const playBtn = document.querySelector('.progress-area .area-right .btn-play')
const tick1 = document.querySelector('.complete-area .tick-1')
const tick2 = document.querySelector('.complete-area .tick-2')
const doneText = document.querySelector('.complete-area span')

let loadingTime = 60000
let progress = {
  value: '0 %'
}
let loadingStatus = true

document.querySelector('.start-button').addEventListener('click', function() {
  document.querySelector('.btn-area').style.zIndex = '5';
  anime({
    targets: loadingIcon,
    opacity: [0, 1],
    duration: 750,
    easing: 'easeOutQuad'
  })

  let aniLoadingIcon = anime({
    targets: loadingIcon,
    rotateZ: 360,
    duration: 2000,
    loop: true,
    easing: 'linear'
  })

  anime({
    targets: loadingProgress,
    translateY: ['15px', '0'],
    opacity: [0, 1],
    delay: 250,
    duration: 750,
    easing: 'easeOutQuart'
  })

  anime({
    targets: loadingBtn,
    translateY: ['15px', '0'],
    opacity: [0, 1],
    delay: 350,
    duration: 1000,
    easing: 'easeOutQuart'
  })

  let aniProgress = anime({
    targets: progress,
    value: '100 %',
    duration: loadingTime,
    easing: 'cubicBezier(.5, .05, .3, .9)',
    delay: 1000,
    round: 1,
    update: function() {
      loadingProgress.innerHTML = JSON.stringify(progress.value).replace(/^"(.*)"$/, '$1')
    }
  })

  let aniFrameBtn = anime({
    targets: frameBtn,
    strokeDashoffset: [525, 0],
    duration: loadingTime,
    easing: 'cubicBezier(.5, .05, .3, .9)',
    delay: 1000,
    complete: function() {
      completeLoading()
    }
  })

  loadingBtn.addEventListener('click', () => {
    if (loadingStatus) {
      aniLoadingIcon.pause()
      aniProgress.pause()
      aniFrameBtn.pause()
      pauseBtn.style.transform = 'translateY(-40px)'
      playBtn.style.transform = 'translateY(0px)'
      loadingStatus = false
    } else {
      aniLoadingIcon.play()
      aniProgress.play()
      aniFrameBtn.play()
      pauseBtn.style.transform = 'translateY(0px)'
      playBtn.style.transform = 'translateY(40px)'
      loadingStatus = true
    }
    
  })
});

function completeLoading() {
  anime({
    targets: loadingIcon,
    translateX: [0, -20],
    opacity: [1, 0],
    duration: 500,
    delay: 0,
    easing: 'easeInQuad'
  })

  anime({
    targets: loadingProgress,
    translateY: [0, -20],
    opacity: [1, 0],
    duration: 500,
    delay: 250,
    easing: 'easeInQuad'
  })

  anime({
    targets: loadingBtn,
    translateY: [0, -20],
    opacity: [1, 0],
    duration: 500,
    delay: 500,
    easing: 'easeInQuad',
    complete: function() {
      progressArea.style.display = 'none'
      completeArea.style.display = 'flex'
    }
  })

  anime({
    targets: frameBtn,
    fill: ['#f5f9fe', '#1578ff'],
    duration: 500,
    delay: 750,
    easing: 'easeInQuad'
  })

  anime({
    targets: tick1,
    strokeDashoffset: [52, 0],
    opacity: [0, 1],
    duration: 500,
    easing: 'cubicBezier(.5, .05, .3, .9)',
    delay: 1000
  })

  anime({
    targets: tick2,
    strokeDashoffset: [52, 0],
    opacity: [0, 1],
    duration: 500,
    easing: 'cubicBezier(.5, .05, .3, .9)',
    delay: 1250
  })

  anime({
    targets: doneText,
    opacity: [0, 1],
    translateY: ['25', '0'],
    duration: 1000,
    easing: 'easeOutQuad',
    delay: 1250
  })
}

const container__morph = document.getElementById('container__morph');
const startButton = document.querySelector('.start-button');
const btnArea = document.querySelector('.btn-area');
const help = document.querySelector('.help-icon');

startButton.addEventListener('click', () => {
  container__morph.style.opacity = '0'
  startButton.style.opacity = '0'; /* скрываем startButton */
  help.style.opacity = '0';
  setTimeout(() => {
    btnArea.style.opacity = '1'; /* показываем btnArea */
  }, 100); /* ждем 0,1 секунды, чтобы анимация была плавной */
});


const textList = document.querySelectorAll('.text');

startButton.addEventListener('click', function() {
  btnArea.style.display = 'block';
  btnArea.style.zIndex = '5';
  for (let i = 0; i < textList.length; i++) {
    setTimeout(function() {
      textList[i].style.opacity = '1';
    }, 6000 * i);
    setTimeout(function() {
      textList[i].style.opacity = '0';
    }, 6000 * (i + 1));
  }
});


// получаем элементы
const helpIcon = document.querySelector('.help-icon');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.close-popup');

// при клике на знак "?" отображаем popup
helpIcon.addEventListener('click', () => {
  popup.style.display = 'block';
});

// при клике на кнопку "Закрыть" скрываем popup
closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

// при клике вне popup скрываем его
window.addEventListener('click', (event) => {
  if (event.target == popup) {
    popup.style.display = 'none';
  }
});

//  Темная тема
const switchIcon = document.getElementById('switch-icon');
const text = document.getElementsByClassName('text');

const switchInput = document.getElementById('switch');

switchInput.onclick = function() {
  if (switchInput.checked) {
    document.body.style.backgroundColor = 'white';
    for (let i = 0; i < text.length; i++) {
      text[i].style.color = 'black';
      container__morph.style.color = 'black';
    }
  } else {
    document.body.style.backgroundColor = 'black';
    for (let i = 0; i < text.length; i++) {
      text[i].style.color = 'white';
      container__morph.style.color = 'white';
    }
  }
}



//ПУЛЬСАЦИЯ

const container = document.querySelector('.container');

startButton.addEventListener('click', () => {
  container.style.display = 'flex';
});

// МОРФИНГ ТЕКСТА

const elts = {
  text1: document.getElementById("text1__morph"),
  text2: document.getElementById("text2__morph"),
};

// The strings to morph between. You can change these to anything you want!
const texts = {
  en: [
    "This",
    "is",
    "a",
    "simple",
    "relax",
    "timer",
    "for",
    "one",
    "minute",
  ],
  ru: [
    "Это",
    "простой",
    "релакс",
    "таймер",
    "на",
    "одну",
    "минуту",
  ],
};

// Controls the speed of morphing.
const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.en.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts.en[textIndex % texts.en.length];
elts.text2.textContent = texts.en[(textIndex + 1) % texts.en.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
    cooldown = cooldownTime;
    fraction = 1;
  }

  setMorph(fraction);
}

// A lot of the magic happens here, this is what applies the blur filter to the text.
function setMorph(fraction) {
  // fraction = Math.cos(fraction * Math.PI) / -2 + .5;

  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[currentLanguage][textIndex % texts[currentLanguage].length];
  elts.text2.textContent = texts[currentLanguage][(textIndex + 1) % texts[currentLanguage].length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}

// Animation loop, which is called every frame.
function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
    if (shouldIncrementIndex) {
      textIndex++;
    }

    doMorph();
  } else {
    doCooldown();
  }
}

// Start the animation.
animate();

// Language switcher
const languageSwitcher = document.getElementById("language-switcher");

let currentLanguage = "ru";

languageSwitcher.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "ru" : "en";
  textIndex = texts[currentLanguage].length - 1;
});
