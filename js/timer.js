import { btnPlay, btnPause } from "./elements.js";
import Sounds from "./sounds.js";

const { endTime } = Sounds()

export function Timer({
  timerMinutes,
  timerSeconds
}) {
  let timerTimeOut;
  let minutes = timerMinutes.innerHTML;
  let seconds = timerSeconds.innerHTML;
  function countDown() {
    let minutes = Number(timerMinutes.innerHTML);
    let seconds = Number(timerSeconds.innerHTML);
    timerTimeOut = setTimeout(function(){
      if(minutes <= 0 && seconds == 0){
        endTime()
        return
      }
      if(seconds <= 0) {
        seconds = 60;
        timerMinutes.innerHTML = String(minutes - 1).padStart(2, '0');
      }
      timerSeconds.innerHTML = String(seconds - 1).padStart(2, '0');
      countDown()
    }, 1000);
  }

  function pause() {
    toggleButtons();
    clearTimeout(timerTimeOut);
  }

  function stop() {
    clearTimeout(timerTimeOut);
    resetDisplay();
    btnPlay.classList.remove('hide');
    btnPause.classList.add('hide');
  }

  function resetDisplay() {
    timerMinutes.innerHTML = minutes;
    timerSeconds.innerHTML = seconds;
  }

  function increment() {
    let minutes = Number(timerMinutes.innerHTML);
    if(minutes >= 55)
      return
    timerMinutes.innerHTML = String(minutes + 5).padStart('2', 0);
  }

  function decrement() {
    let minutes = Number(timerMinutes.innerHTML);
    if(minutes <= 5)
      return
    timerMinutes.innerHTML = String(minutes - 5).padStart('2', 0);
  }

  function toggleButtons() {
    btnPlay.classList.toggle('hide');
    btnPause.classList.toggle('hide');
  }

  return {
    countDown,
    pause,
    stop,
    increment,
    decrement,
    toggleButtons
  }
}
