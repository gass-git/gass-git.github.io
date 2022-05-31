export default function getPropValue(obj, index) {
  let keysArray = Object.keys(obj)
  let key = keysArray[index]
  return obj[key]
}