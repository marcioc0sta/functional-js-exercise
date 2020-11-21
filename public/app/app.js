import { notaService as service } from './nota/service.js'
import { takeUntil } from './utils/operators.js'
import { log } from './utils/promise-helpers.js'
import './utils/array-helpers.js'

const operation1 = takeUntil(3, () =>
  service.sumItems('2143').then(log).catch(log)
)

document.querySelector('#myButton').onclick = operation1
