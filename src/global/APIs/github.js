import axios from 'axios'

const repos_api = 'https://api.github.com/users/gass-git/repos'
const events_api = 'https://api.github.com/users/gass-git/events/public'
const user_api = 'https://api.github.com/users/gass-git'

function fetchGithubStats({ setGithubStats }) {
  axios.get(user_api)
    .then((resp) => {
      setGithubStats({
        public_repos: resp.data.public_repos,
        followers: resp.data.followers
      })
    })
}

function fetchRepos({ setRepos }) {
  let data = []

  axios.get(repos_api)
    .then((resp) => {
      resp.data.forEach((repo) => {
        if (repo.description !== null && repo.homepage !== '' && !repo.fork) {
          data.push({
            id: repo.id,
            name: repo.name,
            about: repo.description,
            project_url: repo.homepage,
            repo_url: repo.html_url,
            topics: repo.topics,
            created_at: repo.created_at
          })
        }
      })
      setRepos(data)
    })
    .catch((error) => console.log(error))
}

function getLatestCommit({ setLatestCommit }) {
  axios.get(events_api)
    .then((resp) => {
      let gitEvents = resp.data
      let filteredEvents = gitEvents.filter((obj) => 'commits' in obj.payload)
      setLatestCommit({
        comment: filteredEvents[0].payload.commits[0].message,
        repo: filteredEvents[0]['repo']['name'].slice(9)
      })
    })
}

export { fetchRepos, getLatestCommit, fetchGithubStats }
