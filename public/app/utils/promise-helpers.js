export const handleStatus = res =>
  res.ok ? res.json() : Promise.reject(res.statusText)

export const trace = param => {
  console.log(param)
  return param
}

export const timeoutPromise = (milliseconds, promise) => {
  const timeout = new Promise((_, reject) => {
    setTimeout(
      reject,
      milliseconds,
      `Limite da operação excedido (limite: ${milliseconds} ms)`
    )
  })

  return Promise.race([timeout, promise])
}
