import axios from 'axios'

const articles_api = 'https://dev.to/api/articles?username=gass'

function fetchArticles({ setArticles }) {
  let data = []

  axios.get(articles_api)
    .then((resp) => {
      resp.data.forEach((article) => {
        data.push({
          id: article.id,
          title: article.title,
          description: article.description,
          url: article.url,
          published_at: article.created_at,
          tags: article.tag_list,
          comments: article.comments_count,
          reactions: article.public_reactions_count,
          reading_time_minutes: article.reading_time_minutes
        })
      })
      setArticles(data)
    })
    .catch((error) => console.log(error))
}

function getLatestArticle({ setLatestArticle }) {
  axios.get(articles_api)
    .then((resp) => {
      let articles = resp.data
      setLatestArticle(articles[0].title)
    })
}

export { fetchArticles, getLatestArticle }