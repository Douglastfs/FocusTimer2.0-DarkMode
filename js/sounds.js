export default function() {

  const forestSound = new Audio('./audio/Floresta.wav');
  const rainSound = new Audio('./audio/Chuva.wav');
  const coffeSound = new Audio('./audio/Cafeteria.wav');
  const fireplaceSound = new Audio('./audio/Lareira.wav');
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");

  forestSound.loop = true
  rainSound.loop = true
  coffeSound.loop = true
  fireplaceSound.loop = true

  function pressButton() {
    buttonPressAudio.play()
    buttonPressAudio.volume = 0.4
  }

  function endTime() {
    kitchenTimer.play()
  }

  function playForestSound() {
    forestSound.paused === false ? forestSound.pause() : forestSound.play();
    rainSound.pause();
    coffeSound.pause();
    fireplaceSound.pause();
  }

  function playRainSound() {
    rainSound.paused === false ? rainSound.pause() : rainSound.play()
    forestSound.pause();
    coffeSound.pause();
    fireplaceSound.pause();
  }

  function playCoffeSound() {
    coffeSound.paused === false ? coffeSound.pause() : coffeSound.play()
    forestSound.pause();
    rainSound.pause();
    fireplaceSound.pause();
  }

  function playFireplaceSound() {
    fireplaceSound.paused === false ? fireplaceSound.pause() : fireplaceSound.play();
    forestSound.pause();
    rainSound.pause();
    coffeSound.pause();
  }

  return {
    forestSound,
    rainSound,
    coffeSound,
    fireplaceSound,
    playCoffeSound,
    playFireplaceSound,
    playForestSound,
    playRainSound,
    pressButton,
    endTime
  }
}