import {
  btnPlay,
  btnPause,
  btnStop,
  btnIncrement,
  btnDecrement,
  btnCoffeSound,
  btnFireplaceSound,
  btnForestSound,
  btnRainSound,
  btnLightMode,
  btnDarkMode,
  timerMinutes,
  timerSeconds,
  spanTwoPoints,
  forestVolume,
  rainVolume,
  coffeVolume,
  fireplaceVolume,
  forestBtn,
  rainBtn,
  coffeBtn,
  fireplaceBtn
} from './elements.js'

export default function({timer, sounds}){

  btnPlay.addEventListener('click', handleClickPlay);
  btnPause.addEventListener('click', handleClickPause);
  btnStop.addEventListener('click', handleClickStop);
  btnIncrement.addEventListener('click', handleClickIncrement);
  btnDecrement.addEventListener('click', handleClickDecrement);
  forestBtn.addEventListener('click', handleClickForestSound);
  rainBtn.addEventListener('click', handleClickRainSound);
  coffeBtn.addEventListener('click', handleClickCoffeSound);
  fireplaceBtn.addEventListener('click', handleClickFireplaceSound);
  btnLightMode.addEventListener('click', handleClickLightMode);
  btnDarkMode.addEventListener('click', handleClickDarkMode);

  forestVolume.addEventListener('input', () => {
    sounds.forestSound.volume = forestVolume.value;
  } );

  rainVolume.addEventListener('input', () => {
    sounds.rainSound.volume = rainVolume.value;
  } );

  coffeVolume.addEventListener('input', () => {
    sounds.coffeSound.volume = coffeVolume.value;
  } );

  fireplaceVolume.addEventListener('input', () => {
    sounds.fireplaceSound.volume = fireplaceVolume.value;
  } );

  function handleClickPlay() {
    timer.countDown();
    timer.toggleButtons()
    sounds.pressButton();
  }

  function handleClickPause() {
    timer.pause();
    sounds.pressButton();
  }

  function handleClickStop() {
    timer.stop();
    sounds.pressButton();
  }

  function handleClickIncrement() {
    timer.increment()
    sounds.pressButton();
  }

  function handleClickDecrement() {
    timer.decrement()
    sounds.pressButton();
  }

  function handleClickForestSound() {
    sounds.playForestSound()
    activeForestButton()
  }

  function handleClickRainSound() {
    sounds.playRainSound()
    activeRainButton()
  }

  function handleClickCoffeSound() {
    sounds.playCoffeSound()
    activeCoffeButton()
  }

  function handleClickFireplaceSound() {
    sounds.playFireplaceSound()
    activeFireplaceButton()
  }

  function activeForestButton() {
    buttonClicked(btnForestSound)
    btnRainSound.classList.remove('clicked')
    btnFireplaceSound.classList.remove('clicked')
    btnCoffeSound.classList.remove('clicked')
  }

  function activeRainButton() {
    buttonClicked(btnRainSound)
    btnForestSound.classList.remove('clicked')
    btnFireplaceSound.classList.remove('clicked')
    btnCoffeSound.classList.remove('clicked')
  }

  function activeCoffeButton() {
    buttonClicked(btnCoffeSound)
    btnRainSound.classList.remove('clicked')
    btnFireplaceSound.classList.remove('clicked')
    btnForestSound.classList.remove('clicked')
  }

  function activeFireplaceButton() {
    buttonClicked(btnFireplaceSound)
    btnRainSound.classList.remove('clicked')
    btnForestSound.classList.remove('clicked')
    btnCoffeSound.classList.remove('clicked')
  }

  function buttonClicked(button) {
    button.classList.contains('clicked') ? button.classList.remove('clicked') : button.classList.add('clicked');
  }

  function handleClickLightMode() {
    chanceColorItensDarkMode()
  }

  function handleClickDarkMode() {
    chanceColorItensLightMode()
  }

  function chanceColorItensDarkMode() {
    btnLightMode.classList.toggle('hide');
    btnDarkMode.classList.toggle('hide');
    document.body.classList.add('body-dark-mode');
    document.body.classList.remove('body-light-mode');
    btnForestSound.classList.add('card-dark-mode')
    btnRainSound.classList.add('card-dark-mode')
    btnCoffeSound.classList.add('card-dark-mode')
    btnFireplaceSound.classList.add('card-dark-mode')
    btnPlay.classList.add('dark-mode');
    btnPause.classList.add('dark-mode');
    btnStop.classList.add('dark-mode');
    btnIncrement.classList.add('dark-mode');
    btnDecrement.classList.add('dark-mode');
    timerMinutes.classList.add('dark-mode');
    timerSeconds.classList.add('dark-mode');
    spanTwoPoints.classList.add('dark-mode');
  }

  function chanceColorItensLightMode() {
    btnLightMode.classList.toggle('hide');
    btnDarkMode.classList.toggle('hide');
    document.body.classList.remove('body-dark-mode');
    document.body.classList.add('body-light-mode');
    btnForestSound.classList.remove('card-dark-mode')
    btnRainSound.classList.remove('card-dark-mode')
    btnCoffeSound.classList.remove('card-dark-mode')
    btnFireplaceSound.classList.remove('card-dark-mode')
    btnPlay.classList.remove('dark-mode');
    btnPause.classList.remove('dark-mode');
    btnStop.classList.remove('dark-mode');
    btnIncrement.classList.remove('dark-mode');
    btnDecrement.classList.remove('dark-mode');
    timerMinutes.classList.remove('dark-mode');
    timerSeconds.classList.remove('dark-mode');
    spanTwoPoints.classList.remove('dark-mode');
  }

}
