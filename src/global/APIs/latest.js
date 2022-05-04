import { CatchingPokemonSharp, ConnectingAirportsOutlined } from "@mui/icons-material"
import axios from "axios"

async function fetchLatest({ setLatest }) {
  const git_events = 'https://api.github.com/users/gass-git/events/public'
  const dev_articles = 'https://dev.to/api/articles?username=gass'
  const SO_answers = 'https://api.stackexchange.com/2.3/users/14895985/answers?order=desc&sort=activity&site=stackoverflow&key=op*AZFz8o6Pqr3596Yc)Lw(('

  let array = []

  async function fetchData() {
    let array = [], count = 0;

    // stack overflow data
    const SO_resp = await fetch(SO_answers)
    const SO_data = await SO_resp.json()
    const SO_dataArr = await SO_data.items

    for await (let el of SO_dataArr) {
      if (count === 3) break
      else {
        let id = el.question_id
        let question_api = `https://api.stackexchange.com/2.3/questions/${id}?order=desc&sort=activity&site=stackoverflow&key=op*AZFz8o6Pqr3596Yc)Lw((`

        const question_resp = await fetch(question_api)
        const question_data = await question_resp.json()

        array.push({
          created_at: el.creation_date,
          id: el.answer_id,
          type: 'SO answer',
          detail: question_data.items[0].title,
          url: `https://stackoverflow.com/a/${el.answer_id}`
        })

        count++
      }
    }

    // github commits data
    const git_resp = await fetch(git_events)
    const git_data = await git_resp.json()

    count = 0 // reset counter

    for await (let el of git_data) {
      if (count === 10) {
        break
      }
      else if (el.type === 'PushEvent') {
        let seconds = new Date(el.created_at).getTime() / 1000

        array.push({
          created_at: seconds,
          id: el.id,
          type: 'commit',
          detail: el.payload.commits[0].message,
          repo_name: el.repo.name,
          url: `https://github.com/${el.repo.name}`
        })
      }

      count++
    }

    // devto articles data
    const dev_resp = await fetch(dev_articles)
    const dev_data = await dev_resp.json()

    count = 0 // reset counter

    for await (let el of dev_data) {
      if (count === 5) break
      else {
        let seconds = new Date(el.created_at).getTime() / 1000

        array.push({
          created_at: seconds,
          id: el.id,
          type: 'article',
          detail: el.title,
          url: el.url
        })
      }

      count++
    }

    return array
  }

  fetchData().then((array) => {
    // sort array by most recent creation dates.
    // note: the bigger 'created_at' number is, the more recent it is.
    array.sort((a, b) => b.created_at - a.created_at)
    setLatest(array)
  })

}

export { fetchLatest }