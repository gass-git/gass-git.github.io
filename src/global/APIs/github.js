import axios from 'axios'

const repos_api = 'https://api.github.com/users/gass-git/repos'
const events_api = 'https://api.github.com/users/gass-git/events/public'
const user_api = 'https://api.github.com/users/gass-git'

function fetchGithubStats({ dispatch }) {
  axios.get(user_api)
    .then((resp) => {
      let obj = {
        public_repos: resp.data.public_repos,
        followers: resp.data.followers
      }
      dispatch({ type: 'set github stats', dataObj: obj })
    })
}

function fetchRepos({ dispatch }) {
  let data = []

  axios.get(repos_api)
    .then((resp) => {
      resp.data.forEach((repo) => {
        if (repo.name !== "mechanised" && repo.description !== null && repo.homepage !== '' && repo.homepage !== null && !repo.fork) {
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
      dispatch({ type: 'set repos', reposArray: data })
    })
    .catch((error) => console.log(error))
}

function getLatestCommit({ dispatch }) {
  axios.get(events_api)
    .then((resp) => {
      let gitEvents = resp.data
      
      // if there are no events in the last 90 days resp.data will be empty
      if(gitEvents.length !== 0){
        let filteredEvents = gitEvents.filter((obj) => 'commits' in obj.payload)
        let obj = {
          comment: filteredEvents[0].payload.commits[0].message,
          repo: filteredEvents[0]['repo']['name'].slice(9)
        }
        dispatch({ type: 'set latest commit', dataObj: obj })
      }
    })
    .catch((error) => console.log(error))
}

export { fetchRepos, getLatestCommit, fetchGithubStats }
