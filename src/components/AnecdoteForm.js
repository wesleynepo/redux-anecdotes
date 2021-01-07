import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { statusNotify } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

    const newAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value 
        event.target.anecdote.value = ''        
        props.createAnecdote(content)
        props.statusNotify('Sua mãe é minha', 5000 )
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={newAnecdote}>
            <div><input name="anecdote"/></div>
            <button type="submit">create</button>
            </form>
        </div>
    )
}


export default connect( null, { createAnecdote, statusNotify })(AnecdoteForm)