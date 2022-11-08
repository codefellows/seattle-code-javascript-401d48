// action creator
export const selectCategory = (category) => {
  return {
    type: 'SELECT_CATEGORY',
    payload: category
  }
}

export const incrementVote = (candidate) => {
  return {
    type: 'INCREMENT',
    payload: candidate,
  }
}

export const decrementVote = (candidate) => {
  return {
    type: 'DECREMENT',
    payload: candidate,
  }
}

export const reset = () => {
  return {
    type: 'RESET',
  }
}
