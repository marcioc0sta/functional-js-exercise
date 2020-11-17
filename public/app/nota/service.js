import { partialize, pipe } from '../utils/operators.js'
import { handleStatus } from '../utils/promise-helpers.js'

const API = 'http://localhost:3000/notas'

const getItemFromNotas = notas => notas.$flatMap(nota => nota.itens)
const filterItemsByCode = (code, items) =>
  items.filter(item => item.codigo === code)
const sumItemsValue = items =>
  items.reduce((total, item) => total + item.valor, 0)

export const notaService = {
  listAll() {
    return fetch(API)
      .then(handleStatus)
      .catch(err => {
        console.log(err)
        return Promise.reject('Não foi possível obter notas fiscais')
      })
  },
  sumItems(code) {
    const sumItems = pipe(
      getItemFromNotas,
      partialize(filterItemsByCode, code),
      sumItemsValue
    )
    return this.listAll().then(sumItems)
  },
}
