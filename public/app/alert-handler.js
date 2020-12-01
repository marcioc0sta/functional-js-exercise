import eventKeys from './enum/eventKeys.js'
import { EventEmitter } from './utils/event-emmiter.js'

EventEmitter.on(eventKeys.TOTAL_OF_ITEMS, alert)
