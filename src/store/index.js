import { 
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux'

import thunk from 'redux-thunk'

import studyReducer from './reducers/studyReducer'
import goodReducer from './reducers/goodReducer'

const rootReducer = combineReducers({
    study: studyReducer,
    good: goodReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store