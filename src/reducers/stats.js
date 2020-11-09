import { StatsType } from '../actions'

const initialState = {
  data: []
}

const stats = (state = initialState, { type, payload }) => {
  switch (type) {
    case StatsType.GET_STATS_SUCCESS:
      return { data: payload }

    default:
      return state
  }
}

export default stats
