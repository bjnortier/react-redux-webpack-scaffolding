export default (state = 0, action) => {
  switch (action.type) {
    case 'COUNTER+':
      return state + 1
    case 'COUNTER-':
      return state - 1
    default:
      return state
  }
}
