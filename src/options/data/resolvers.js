/**
 * External dependencies
 */
import { apiFetch } from '@wordpress/data-controls';

/**
 * Internal dependencies
 */
import { API_NAMESPACE } from './constants';
import {
	setLoadingState,
	setOptions,
	setOption,
	setOptionForEditing,
} from './actions';

export function* getOptions(search) {
	let path = `${API_NAMESPACE}/options?`;
	if (search) {
		path += `search=${search}`;
	}

	yield setLoadingState(true);

	try {
		const response = yield apiFetch({
			path,
		});
		yield setOptions(response);
	} catch (error) {
		throw new Error();
	}
}

export function* getOption(optionName) {
	let path = `${API_NAMESPACE}/options?search=${optionName}`;

	yield setLoadingState(true);

	try {
		const response = yield apiFetch({
			path,
		});
		if (response && response.length > 0) {
			yield setOption(
				response.find((opt) => opt.option_name === optionName)
			);
		}
	} catch (error) {
		throw new Error();
	}
}

export function* getOptionForEditing(optionName) {
	const loadingOption = {
		name: 'Loading...',
		content: '',
		saved: false,
	};
	if (optionName === undefined) {
		return setOptionForEditing(loadingOption);
	}

	yield setOptionForEditing(loadingOption);

	const path = '/wc-admin/options?options=' + optionName;

	try {
		const response = yield apiFetch({
			path,
		});

		let content = response[optionName];
		if (typeof content === 'object') {
			content = JSON.stringify(response[optionName], null, 2);
		}

		yield setOptionForEditing({
			name: optionName,
			content,
		});
	} catch (error) {
		throw new Error(error);
	}
}
