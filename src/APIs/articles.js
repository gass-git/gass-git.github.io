import axios from "axios"

export default function fetchArticles({ setArticles }) {
  let articles_api = 'https://dev.to/api/articles?username=gass'
  let data = []

  axios.get(articles_api)
    .then((resp) => {
      resp.data.forEach((article) => {
        data.push({
          id: article.id,
          title: article.title,
          description: article.description,
          url: article.url,
          cover_url: article.cover_image,
          published_at: article.created_at,
          tags: article.tag_list
        })
      })
      setArticles(data)
    })
    .catch((error) => console.log(error))
}
