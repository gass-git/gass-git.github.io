const initialState = {
  appLoading: true,
  selected: 'home',
  numberOfRenders: {home: 0, projects:0, writings:0, stats:0 },
  showModal: false,
  modalData: {},
  modalImages: [],
  latest: [],
  repos: [],
  articles: [],
  SO_topTech: [],
  SO_scores: {},
  githubStats: {},
  uniqueVisits: null,
  guestLocation: null,
  scrollerSwitch: 'on',
  scrollerMsgIndex: 0,
  latestArticle: '',
  SO_latestAnswer: '',
  latestCommit: {},
  scrollMessages: 6
}

function appReducer(state, action) {
  switch (action.type) {
    case 'loading completed':
      return {
        ...state,
        appLoading: false
      }

    case 'update navbar selection':
      return {
        ...state,
        selected: action.pathname
      }

    case 'update number of renders':
      if(action.page === 'home') return{
        ...state,
        numberOfRenders: {...state.numberOfRenders, home: state.numberOfRenders['home'] + 1}
      }
      else if(action.page === 'projects') return{
        ...state,
        numberOfRenders: {...state.numberOfRenders, projects: state.numberOfRenders['projects'] + 1}
      }
      else if(action.page === 'writings') return{
        ...state,
        numberOfRenders: {...state.numberOfRenders, writings: state.numberOfRenders['writings'] + 1}
      }
      else if(action.page === 'stats') return{
        ...state,
        numberOfRenders: {...state.numberOfRenders, stats: state.numberOfRenders['stats'] + 1}
      }

    case 'show modal':
      return {
        ...state,
        modalImages: action.images,
        modalData: action.data,
        showModal: true
      }

    case 'hide modal':
      return {
        ...state,
        showModal: false
      }

    case 'set latest':
      return {
        ...state,
        latest: action.dataArray
      }

    case 'set repos':
      return {
        ...state,
        repos: action.reposArray
      }

    case 'set articles':
      return {
        ...state,
        articles: action.dataArray
      }

    case 'set SO top tech':
      return {
        ...state,
        SO_topTech: action.topTech
      }

    case 'set SO reputation':
      return {
        ...state,
        SO_reputation: action.dataObj
      }

    case 'set github stats':
      return {
        ...state,
        githubStats: action.dataObj
      }

    case 'set visits count':
      return {
        ...state,
        uniqueVisits: action.count
      }

    case 'set guest location':
      return {
        ...state,
        guestLocation: action.location
      }

    case 'set scroller on':
      return {
        ...state,
        scrollerSwitch: 'on'
      }

    case 'set scroller off':
      return {
        ...state,
        scrollerSwitch: 'off'
      }

    case 'next scroller msg':
      if (state.scrollerMsgIndex < state.scrollMessages - 1) return {
        ...state,
        scrollerMsgIndex: state.scrollerMsgIndex + 1
      }
      else return {
        ...state,
        scrollerMsgIndex: 0
      }

    case 'set latest article':
      return {
        ...state,
        latestArticle: action.latestArticle
      }

    case 'set latest SO answer':
      return {
        ...state,
        SO_latestAnswer: action.latestAnswer
      }

    case 'set latest commit':
      return {
        ...state,
        latestCommit: action.dataObj
      }

    default:
      return state
  }
}

export { initialState, appReducer }