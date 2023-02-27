function loadText(language) {
    fetch(`text_${language}.json`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('start_btn').textContent = data.start_btn;
        document.getElementById('popup__descr__text').textContent = data.popup__descr__text;
        document.getElementById('close__popup').textContent = data.close__popup;
        document.getElementById('end__timer').textContent = data.end__timer;
        document.getElementById('text__switch').textContent = data.text__switch;
        document.getElementById('text__switch2').textContent = data.text__switch2;
        document.getElementById('text__switch3').textContent = data.text__switch3;
        document.getElementById('text__switch4').textContent = data.text__switch4;
        document.getElementById('text__switch5').textContent = data.text__switch5;
        document.getElementById('text__switch6').textContent = data.text__switch6;
        document.getElementById('text__switch7').textContent = data.text__switch7;
        document.getElementById('text__switch8').textContent = data.text__switch8;
        document.getElementById('text__switch9').textContent = data.text__switch9;
        document.getElementById('text__switch10').textContent = data.text__switch10;
      });
  }
  
  const russianFlag = document.getElementById('russian-flag');
  const usFlag = document.getElementById('us-flag');
  russianFlag.addEventListener('click', function() {
    russianFlag.style.display = 'none';
    usFlag.style.display = 'inline';
    loadText('en');
  });
  usFlag.addEventListener('click', function() {
    usFlag.style.display = 'none';
    russianFlag.style.display = 'inline';
    loadText('ru');
  });
  
  const browserLanguage = navigator.language.substr(0, 2);
  loadText(browserLanguage);
  