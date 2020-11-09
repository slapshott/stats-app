import { createSelector } from 'reselect'

const getComments = (state, props) => {
  const comments = state.comments.comments
  return comments
}

const getButtons = (state, props) => {
  const buttons = state.general.buttons
  return buttons
}

export const makeGetCommentsState = () => createSelector(
  [getComments],
  (comments) => comments
)

export const makeGetButtonsState = () => createSelector(
  [getButtons],
  (buttons) => buttons
)
