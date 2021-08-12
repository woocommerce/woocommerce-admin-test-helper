/**
 * Internal dependencies
 */
import TYPES from './action-types';

const DEFAULT_STATE = {
	currentlyRunning: {},
	errorMessages: [],
	cronJobs: false,
	messages: {},
	params: [],
	status: '',
};

const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case TYPES.ADD_MESSAGE:
			if (!action.status) {
				action.status = 'info';
			}
			return {
				...state,
				messages: {
					...state.messages,
					[action.source]: {
						message: action.message,
						status: action.status,
					},
				},
			};
		case TYPES.REMOVE_MESSAGE:
			const messages = { ...state.messages };
			delete messages[action.source];
			return {
				...state,
				messages,
			};
		case TYPES.SET_STATUS:
			return {
				...state,
				status: action.status,
			};
		case TYPES.ADD_CURRENTLY_RUNNING:
			return {
				...state,
				currentlyRunning: {
					...state.currentlyRunning,
					[action.command]: true,
				},
			};
		case TYPES.REMOVE_CURRENTLY_RUNNING:
			return {
				...state,
				currentlyRunning: {
					...state.currentlyRunning,
					[action.command]: false,
				},
			};
		case TYPES.SET_CRON_JOBS:
			return {
				...state,
				cronJobs: action.cronJobs,
			};
		case TYPES.SET_TRANSIENTS:
			return {
				...state,
				transients: action.transients,
			};
		case TYPES.ADD_COMMAND_PARAMS:
			return {
				...state,
				params: {
					[action.source]: action.params,
				},
			};
		default:
			return state;
	}
};

export default reducer;
