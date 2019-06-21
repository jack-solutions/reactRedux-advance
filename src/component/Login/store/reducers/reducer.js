import t from '../actions/types';

export default function(state={
    username:''
},action){
    switch (action.type){
        case t.AUTH_USER:
        return {
          ...state,
          username: action.payload
        };
        default:
          return state;
    }
}