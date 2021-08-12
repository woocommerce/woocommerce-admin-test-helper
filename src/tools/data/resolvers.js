/**
 * External dependencies
 */
import { apiFetch } from '@wordpress/data-controls';

/**
 * Internal dependencies
 */
import { API_NAMESPACE } from './constants';
import { setCronJobs, setTransients } from './actions';

export function* getCronJobs() {
	const path = `${API_NAMESPACE}/tools/get-cron-list/v1`;

	try {
		const response = yield apiFetch({
			path,
			method: 'GET',
		});
		yield setCronJobs(response);
	} catch (error) {
		throw new Error(error);
	}
}

export function* getTransients() {
	const path = `${API_NAMESPACE}/tools/get-transient-list/v1`;

	try {
		const response = yield apiFetch({
			path,
			method: 'GET',
		});
		yield setTransients(response);
	} catch (error) {
		throw new Error(error);
	}
}
