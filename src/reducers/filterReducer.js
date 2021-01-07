const initialState = '' 

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET':
            return action.data.filter.toLowerCase()
        case 'CLEAR_NOTIFICATION':
            return initialState        
        default:
            return state
    }
}

export const filterChange = (filter) => {
    return {type: 'SET', data: {filter} }
}

export const clearNotification = () => {
    return {type: 'CLEAR_NOTIFICATION'}
}

export default reducer 