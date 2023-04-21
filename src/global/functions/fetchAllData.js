import { fetchArticles, getLatestArticle } from '../APIs/dev'
import { fetchGithubStats, fetchRepos, getLatestCommit } from '../APIs/github'
import { fetchReputation, fetchTopTech } from '../APIs/SO'
import { fetchLatest } from '../APIs/latest'
import { getVisitorLocation } from '../APIs/visits'
import { getLatestAnswer } from '../APIs/SO'

export default function fetchAllData({dispatch}, pinnedProjects){
    fetchLatest({ dispatch })
    fetchRepos({ dispatch }, pinnedProjects)
    fetchArticles({ dispatch })
    fetchReputation({ dispatch })
    fetchTopTech({ dispatch })
    fetchGithubStats({ dispatch })
    getVisitorLocation({ dispatch })
    getLatestArticle({ dispatch })
    getLatestAnswer({ dispatch })
    getLatestCommit({ dispatch })
}