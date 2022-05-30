const initialState = {
  selected: 'home',
  latest: []
}

function appReducer(state, action) {
  switch (action.type) {
    case 'update selected':
      return {
        ...state,
        selected: action.option
      }

    case 'set latest':
      return {
        ...state,
        latest: action.dataArray
      }

    default:
      return state
  }
}

export { initialState, appReducer }