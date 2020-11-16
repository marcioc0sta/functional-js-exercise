import { notaService as service } from './nota/service.js'
import { log } from './utils/promise-helpers.js'

import './utils/array-helpers.js'

document.querySelector('#myButton').onclick = () =>
  service.sumItems('2143').then(log).catch(log)
