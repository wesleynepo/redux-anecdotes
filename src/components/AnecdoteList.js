import React from 'react'
import { connect } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { statusNotify } from '../reducers/notificationReducer'

const Anecdote = ({anecdote, vote }) => {
    return (
      <div>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={vote}>vote</button>
        </div>
      </div>
    )
}

const AnecdoteList = (props) => {   

    const voteAction = anecdote => {
      props.voteFor(anecdote)
      props.statusNotify(`You voted for ${anecdote.content}`, 5000 )
    }
  
    return ( props.anecdotes.map( anecdote => {
        return (
        <Anecdote 
            key={anecdote.id} 
            anecdote={anecdote} 
            vote={ () => voteAction(anecdote)}
        />
        ) 
        })
    )
}

const mapDispatchToProps = {
  voteFor,
  statusNotify
}

const mapStateToProps = (state) => {
    if (state.filter !== '' ){
        return { anecdotes: state.anecdotes.filter( anec => anec.content.includes(state.filter) ) }
    }
    return { anecdotes: state.anecdotes }
}

const ConnectedAnedoctes = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedAnedoctes
