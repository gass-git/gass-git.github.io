import axios from 'axios'

export default function fetchRepos({ setRepos }) {
  let repos_api = 'https://api.github.com/users/gass-git/repos'
  let data = []

  axios.get(repos_api)
    .then((resp) => {
      resp.data.forEach((repo) => {
        if (repo.description !== null && repo.homepage !== '') {
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
