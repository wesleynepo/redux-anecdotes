import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data 
}

const createNew = async (content) => {
    const anec = {
        content, votes: 0 
    }

    const response = await axios.post(baseUrl, anec )

    return response.data
}

const update = async (anec) => {
    anec.votes = anec.votes + 1 
    const response = await axios.put(baseUrl+`/${anec.id}`, anec )
    return response.data
}

export default { getAll, createNew, update }