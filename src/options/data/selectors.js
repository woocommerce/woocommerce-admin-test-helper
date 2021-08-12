export function getOptions(state) {
	return state.options;
}

export function getOption(state, optionName) {
	const option = (state.options || []).find(
		(opt) => opt.option_name === optionName
	);
	if (option) {
		return option.option_value;
	}
	return undefined;
}

export function isLoading(state) {
	return state.isLoading;
}

export function getOptionForEditing(state) {
	return state.editingOption;
}

export function getNotice(state) {
	return state.notice;
}
