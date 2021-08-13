/**
 * External dependencies
 */
import { apiFetch } from '@wordpress/data-controls';
import { dispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import TYPES from './action-types';
import { API_NAMESPACE, STORE_KEY } from './constants';
import { STORE_KEY as OPTIONS_STORE_KEY } from '../../options/data/constants';

export function addCurrentlyRunning(command) {
	return {
		type: TYPES.ADD_CURRENTLY_RUNNING,
		command,
	};
}

export function removeCurrentlyRunning(command) {
	return {
		type: TYPES.REMOVE_CURRENTLY_RUNNING,
		command,
	};
}

export function addMessage(source, message) {
	return {
		type: TYPES.ADD_MESSAGE,
		source,
		message,
	};
}

export function updateMessage(source, message, status) {
	return {
		type: TYPES.ADD_MESSAGE,
		source,
		message,
		status,
	};
}

export function removeMessage(source) {
	return {
		type: TYPES.REMOVE_MESSAGE,
		source,
	};
}

export function updateCommandParams(source, params) {
	return {
		type: TYPES.ADD_COMMAND_PARAMS,
		source,
		params,
	};
}

export function setCronJobs(cronJobs) {
	return {
		type: TYPES.SET_CRON_JOBS,
		cronJobs,
	};
}

export function setTransients(transients) {
	return {
		type: TYPES.SET_TRANSIENTS,
		transients,
	};
}

function* runCommand(commandName, func) {
	try {
		yield addCurrentlyRunning(commandName);
		yield addMessage(commandName, 'Executing...');
		yield func();
		yield removeCurrentlyRunning(commandName);
		yield updateMessage(commandName, 'Successful!');
	} catch (e) {
		yield updateMessage(commandName, e.message, 'error');
		yield removeCurrentlyRunning(commandName);
	}
}

export function* triggerWcaInstall() {
	yield runCommand('Trigger WCA Install', function* () {
		yield apiFetch({
			path: API_NAMESPACE + '/tools/trigger-wca-install/v1',
			method: 'POST',
		});
	});
}

export function* resetOnboardingWizard() {
	yield runCommand('Reset Onboarding Wizard', function* () {
		const optionsToDelete = [
			'woocommerce_task_list_tracked_completed_tasks',
			'woocommerce_onboarding_profile',
			'_transient_wc_onboarding_themes',
		];
		yield apiFetch({
			method: 'DELETE',
			path: `${API_NAMESPACE}/options/${optionsToDelete.join(',')}`,
		});
	});
}

export function* resetJetpackConnection() {
	yield runCommand('Reset Jetpack Connection', function* () {
		yield apiFetch({
			method: 'DELETE',
			path: `${API_NAMESPACE}/options/jetpack_options`,
		});
	});
}

export function* enableTrackingDebug() {
	yield runCommand('Enable WC Admin Tracking Debug Mode', function* () {
		window.localStorage.setItem('debug', 'wc-admin:*');
	});
}

export function* updateStoreAge() {
	yield runCommand('Update Installation timestamp', function* () {
		const today = new Date();
		const dd = String(today.getDate()).padStart(2, '0');
		const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		const yyyy = today.getFullYear();

		// eslint-disable-next-line no-alert
		const numberOfDays = window.prompt(
			'Please enter a date in yyyy/mm/dd format',
			yyyy + '/' + mm + '/' + dd
		);

		if (numberOfDays !== null) {
			const dates = numberOfDays.split('/');
			const newTimestamp = Math.round(
				new Date(dates[0], dates[1] - 1, dates[2]).getTime() / 1000
			);
			const payload = {
				woocommerce_admin_install_timestamp: JSON.parse(newTimestamp),
			};
			yield apiFetch({
				method: 'POST',
				path: '/wc-admin/options',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify(payload),
			});
		}
	});
}

export function* runWcAdminDailyJob() {
	yield runCommand('Run wc_admin_daily job', function* () {
		yield apiFetch({
			path: API_NAMESPACE + '/tools/run-wc-admin-daily/v1',
			method: 'POST',
		});
	});
}

export function* deleteAllProducts() {
	if (!confirm('Are you sure you want to delete all of the products?')) {
		return;
	}

	yield runCommand('Delete all products', function* () {
		yield apiFetch({
			path: `${API_NAMESPACE}/tools/delete-all-products/v1`,
			method: 'POST',
		});
	});
}

export function* runSelectedCronJob(params) {
	yield runCommand('Run selected cron job', function* () {
		yield apiFetch({
			path: API_NAMESPACE + '/tools/run-wc-admin-daily/v1',
			method: 'POST',
			data: params,
		});
	});
}

export function* runWCComToggle(params) {
	yield runCommand('Toggle overwriting woocommerce.com url', function* () {
		const response = yield apiFetch({
			path: API_NAMESPACE + '/tools/toggle-wccom-url-overwrite/v1',
			method: 'POST',
			data: params,
		});
		if (response && response.success) {
			const { option_value, option_name } = response;
			yield dispatch(OPTIONS_STORE_KEY).setOption({
				option_value,
				option_name,
			});
		}
	});
}

export function* clearTransient(params) {
	if (params && params.transient) {
		yield runCommand('Clear selected transient', function* () {
			yield apiFetch({
				path: API_NAMESPACE + '/tools/clear-selected-transient/v1',
				method: 'POST',
				data: params,
			});
			yield dispatch(STORE_KEY).invalidateResolutionForStoreSelector(
				'getTransients'
			);
		});
	}
}
