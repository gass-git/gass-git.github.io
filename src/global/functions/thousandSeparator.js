export default function thousandSeparator(number) {
  let string = number.toString()
  return string.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}