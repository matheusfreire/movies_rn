import { GET_TRENDINGS, GET_GENRES } from "./ActionsType"

export function actionGetTrendings (trendings) {
  return {
    type: GET_TRENDINGS,
    trendings,
  }
}

export function actionGetGenres (genres) {
  return {
    type: GET_GENRES,
    genres,
  }
}