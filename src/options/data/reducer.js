/**
 * Internal dependencies
 */
import TYPES from './action-types';

const DEFAULT_STATE = {
	options: [],
	isLoading: true,
	editingOption: {
		name: null,
		content: '{}',
	},
	notice: {
		status: 'success',
		message: '',
	},
};

const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case TYPES.SET_OPTION_FOR_EDITING:
			return {
				...state,
				editingOption: {
					...state.editingOption,
					...action.editingOption,
				},
			};
		case TYPES.SET_IS_LOADING:
			return {
				...state,
				isLoading: action.isLoading,
			};
		case TYPES.SET_OPTIONS:
			return {
				...state,
				options: action.options,
				isLoading: false,
			};
		case TYPES.SET_OPTION:
			const newOptions = (state.options || []).filter(
				(opt) => opt.option_name !== action.option.option_name
			);
			return {
				...state,
				options: [...newOptions, action.option],
				isLoading: false,
			};
		case TYPES.SET_NOTICE:
			return {
				...state,
				notice: {
					...state.notice,
					...action.notice,
				},
			};
		case TYPES.DELETE_OPTION:
			return {
				...state,
				options: state.options.filter(
					(item) => item.option_name !== action.optionName
				),
			};
		default:
			return state;
	}
};

export default reducer;
