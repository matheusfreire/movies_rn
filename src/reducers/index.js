import { GET_TRENDINGS, GET_GENRES } from "../utils/ActionsType"

function movies(state = {}, action) {
  switch (action.type) {
    case GET_TRENDINGS:
      return {
        ...state,
        ...action.trendings,
      }
    case GET_GENRES:
      return {
        ...state,
        ...action.genres
      }
    default:
      return state
  }
}

export default movies