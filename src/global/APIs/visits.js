import axios from 'axios'

function uniqueVisits({ setVisitsCount }) {
  axios.get('https://api.gass.dev/unique_visitors')
    .then((resp) => {
      setVisitsCount(resp.data.count)
    })
}

function getVisitorLocation({ setVisitorLocation }) {
  axios.get('https://geolocation-db.com/json/')
    .then((resp) => {
      setVisitorLocation(resp.data.country_name)
    })
}

export { uniqueVisits, getVisitorLocation }