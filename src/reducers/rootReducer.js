import { combineReducers} from 'redux'
import members from './memberReducer'
import tours from './tourReducer'

const rootReducer = combineReducers({
  members,
  tours
})

  export default rootReducer