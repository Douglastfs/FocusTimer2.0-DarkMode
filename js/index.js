import Events from './events.js'
import Sounds from './sounds.js'
import { Timer } from './timer.js'
import {
  timerMinutes,
  timerSeconds,
} from './elements.js'

const timer = Timer({
  timerMinutes,
  timerSeconds
});

const sounds = Sounds ();

Events({timer, sounds});

