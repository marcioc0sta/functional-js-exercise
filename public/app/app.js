import eventKeys from './enum/eventKeys.js'
import { notaService as service } from './nota/service.js'
import { EventEmitter } from './utils/event-emmiter.js'
import { debounceTime, partialize, pipe, takeUntil } from './utils/operators.js'
import { retry, timeoutPromise, trace } from './utils/promise-helpers.js'
import './utils/array-helpers.js'

const operations = pipe(partialize(takeUntil, 3), partialize(debounceTime, 500))

const action = operations(() =>
  retry(3, 5000, () => {
    return timeoutPromise(200, service.sumItems('2143'))
  })
    .then(total => EventEmitter.emit(eventKeys.TOTAL_OF_ITEMS, total))
    .catch(trace)
)

document.querySelector('#myButton').onclick = action
