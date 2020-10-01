import { userDataActionTypes } from './users.types';

export const addUserData =  (data) => {
	console.log(data)
	return {
		type: userDataActionTypes.ADD_USER_DATA,
		payload: data,
	};
};

export const deleteUserData =  (id) => {
	console.log(id)
	return {
		type: userDataActionTypes.DELETE_USER,
		payload: id,
	};
};