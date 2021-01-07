import anecdoteService from '../services/Anecdotes'

const reducer = (state = [], action) => {
  
  switch(action.type){
    case 'VOTE_FOR':
      return state.map( anec => anec.id !== action.data.id ? anec : action.data )
    case 'NEW_ANECTODE':
      return [...state, action.data ]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export const voteFor = (anec) => {
  return async dispatch => {
    const updateAnec = await anecdoteService.update(anec)
    dispatch({ type:'VOTE_FOR', data: updateAnec })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => { 
    const anec = await anecdoteService.createNew(content)
    dispatch( { type:'NEW_ANECTODE', data: anec } )
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({ type: 'INIT_ANECDOTES', data: anecdotes})
  }
}

export default reducer