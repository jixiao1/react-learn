import {
    GET_ALL_CATES,
    GET_GOOD_LIST
} from '../actions'

let initState = {
    msg: 'hello good',
    cateList: [],
    goodList: []
}

export default function reducer(state=initState, action) {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case GET_ALL_CATES:
            newState.cateList = action.payload
            return newState
        case GET_GOOD_LIST:
            newState.goodList = action.payload
            return newState
        default:
            return newState

    }
}