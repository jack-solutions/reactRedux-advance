import actiontypes from '../actions/types';

export default function(state={
  users:[]
},action){
  switch (action.type){
  
      case actiontypes.ADD_ITEM:
          state.users.push(action.payload)     
        return {
        ...state
      };

      case actiontypes.REMOVE_ITEM:
      return {
        ...state,
        users:action.payload,
      };
      default:
            return state;
    }
}