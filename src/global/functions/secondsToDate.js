export default function secondsToDate(seconds) {
  let x = new window.Date(seconds * 1000)
  let year = x.getFullYear()
  let month = x.getMonth() + 1
  let day = x.getDate()

  if (day < 10) { day = "0" + day }
  if (month < 10) { month = "0" + month }

  let convertedDate = year + "-" + month + "-" + day
  return convertedDate
}