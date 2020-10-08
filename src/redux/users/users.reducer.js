import { userDataActionTypes } from './users.types';

const initialState = {
	users: []
}

const addUserReducer = (state = initialState, action) => {
	
	switch (action.type) {
		case userDataActionTypes.ADD_USER_DATA:
			console.log(action.payload)
			return {
				...state,
				users: [...state.users,action.payload],
			};

		case userDataActionTypes.DELETE_USER: 
			let isUserPresent = state.users.filter(user => user.id == action.payload)
			if(isUserPresent.length > 0){
				let removeIndex = state.users.map(function(item) { return item.id; }).indexOf(action.payload); // findIndex()
				state.users.splice(removeIndex, 1); 
				console.log(state.users)
				return {...state, users: [...state.users]}
			} else {
				return {
					...state
				}
			}
		default:
			return state;
	}
};

export default addUserReducer;
