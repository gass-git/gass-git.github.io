import axios from 'axios'

export default function fetchStats({ setStats }) {
  const SO_api = 'https://api.stackexchange.com/2.3/users/14895985?order=desc&sort=reputation&site=stackoverflow&key=op*AZFz8o6Pqr3596Yc)Lw(('

  axios.get(SO_api)
    .then((resp) => {
      let userData = resp.data.items[0]
      setStats({
        SO_badges: userData.badge_counts,
        SO_reputation: userData.reputation,
        SO_reputation_change_month: userData.reputation_change_month,
        SO_reputation_change_year: userData.reputation_change_year
      })
    })
    .catch((error) => console.log(error))
}

