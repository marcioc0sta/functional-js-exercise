export const handleStatus = res =>
  res.ok ? res.json() : Promise.reject(res.statusText)

export const trace = param => {
  console.log(param)
  return param
}
