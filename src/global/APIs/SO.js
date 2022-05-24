import axios from 'axios'

let answers_api = "https://api.stackexchange.com/2.3/users/14895985/answers?order=desc&sort=activity&site=stackoverflow&key=op*AZFz8o6Pqr3596Yc)Lw(("
let user_data_api = "https://api.stackexchange.com/2.3/users/14895985?order=desc&sort=reputation&site=stackoverflow&key=op*AZFz8o6Pqr3596Yc)Lw(("
let scores_api = "https://api.stackexchange.com/2.3/users/14895985/top-tags?site=stackoverflow&key=op*AZFz8o6Pqr3596Yc)Lw(("

function getLatestAnswer({ setLatestAnswer }) {
  axios.get(answers_api).then((resp) => {
    let answers = resp.data.items

    // get the latest answer by creation_date
    answers.sort((a, b) => b.creation_date - a.creation_date)
    let latestAnswer = answers[0]

    // get question associated with answer
    let id = latestAnswer.question_id
    let questions_api = `https://api.stackexchange.com/2.3/questions/${id}?order=desc&sort=activity&site=stackoverflow&key=op*AZFz8o6Pqr3596Yc)Lw((`

    axios.get(questions_api).then((resp) => {
      setLatestAnswer(resp.data.items[0].title)
    })
  })
}

function fetchReputation({ setSO_reputation }) {
  axios.get(user_data_api)
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
  axios.get(scores_api)
    .then((resp) => {
      let techArray = resp.data.items
      let topTech = techArray.slice(0, 6)

      setSO_topTech(topTech)
    })
    .catch((error) => console.log(error))
}


export { fetchReputation, fetchTopTech, getLatestAnswer }