import { combineReducers } from "redux";
import listOfUsersReducers from '../component/Home/store/reducers/reducer';
import loginReducers from '../component/Login/store/reducers/reducer';

const rootReducer = combineReducers({
    listOfUsers: listOfUsersReducers,
    login: loginReducers,
});
  
export default rootReducer;