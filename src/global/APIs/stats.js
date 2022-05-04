import axios from 'axios'

function fetchReputation({ setSO_reputation }) {
  const SO_api = 'https://api.stackexchange.com/2.3/users/14895985?order=desc&sort=reputation&site=stackoverflow&key=op*AZFz8o6Pqr3596Yc)Lw(('

  axios.get(SO_api)
    .then((resp) => {
      let userData = resp.data.items[0]

      setSO_reputation({
        points: {
          total: userData.reputation,
          month_change: userData.reputation_change_month,
          year_change: userData.reputation_change_year
        },
        badges: userData.badge_counts
      })
    })
    .catch((error) => console.log(error))
}

function fetchTopTech({ setSO_topTech }) {
  const tech_api = 'https://api.stackexchange.com/2.3/users/14895985/top-tags?site=stackoverflow&key=op*AZFz8o6Pqr3596Yc)Lw(('

  axios.get(tech_api)
    .then((resp) => {
      let techArray = resp.data.items
      let topTech = techArray.slice(0, 6)

      setSO_topTech(topTech)
    })
    .catch((error) => console.log(error))
}


export { fetchReputation, fetchTopTech }