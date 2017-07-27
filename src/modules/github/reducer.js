import {
  GET_REPOS_SUCCESS,
} from './constants'

const initialState = {
  repos: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOS_SUCCESS:
      return {
        ...state,
        repos: action.payload.data
      }

    default:
      return state
  }
}
