import axios from 'axios'

import {
  GET_REPOS,
} from './constants'

export function getMyRepos () {
  return {
    type: GET_REPOS,
    payload: axios.get(`https://api.github.com/users/hamiltondanielb/repos`),
  }
}
