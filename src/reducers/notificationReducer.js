const initialState = null 

let timeoutID

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'WARNING':
            return action.text
        case 'STATUS':
            return action.text
        case 'CLEAR':
            return initialState        
        default:
            return state
    }
}

export const warningNotify = (warning) => {
    return {type: 'WARNING', text: warning}
}

export const statusNotify = (status, time ) => {
    return async dispatch => {
    
    if(timeoutID){
        clearTimeout(timeoutID)
    }

    timeoutID = setTimeout(() => dispatch(clearNotification()), time )
    return dispatch({type: 'STATUS', text: status})
    }
}

export const clearNotification = () => {
    return {type: 'CLEAR'}
}

export default reducer 