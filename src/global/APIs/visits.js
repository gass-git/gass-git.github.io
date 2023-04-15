import axios from 'axios'

function getUniqueVisits({ dispatch }) {
  axios.get('https://api.gass.dev/unique_visitors')
    .then((resp) => {
      dispatch({ type: 'set visits count', count: `000${resp.data.count}` })
    })
}

function getVisitorLocation({ dispatch }) {
  axios.get('https://geolocation-db.com/json/')
    .then((resp) => {
      dispatch({
        type: 'set guest location',
        location: resp.data.country_name
      })
    })
}

export { getUniqueVisits, getVisitorLocation }