import { notaService as service } from './nota/service.js'
import { debounceTime, partialize, pipe, takeUntil } from './utils/operators.js'
import { timeoutPromise, trace } from './utils/promise-helpers.js'
import './utils/array-helpers.js'

const operations = pipe(partialize(takeUntil, 3), partialize(debounceTime, 500))
const action = operations(() =>
  timeoutPromise(200, service.sumItems('2143')).then(trace).catch(trace)
)

document.querySelector('#myButton').onclick = action
