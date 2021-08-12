/**
 * External dependencies.
 */
import { useDispatch, useSelect } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';
import { __experimentalInputControl as InputControl } from '@wordpress/components';
import { useThrottle } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import { STORE_KEY as OPTIONS_STORE_KEY } from '../../options/data/constants';
import { STORE_KEY } from '../data/constants';

export const WC_COM_TOGGLE_ACTION_NAME = 'runWCComToggle';
const ENABLE_WCCOM_URL_OVERWRITE_OPTION =
	'wc_test_helper_enable_wccom_url_overwrite';
const WCCOM_URL_OVERWRITE_OPTION = 'wc_test_helper_wccom_url_ovewrite';

export const ToggleWCComUrl = () => {
	const { saveOption } = useDispatch(OPTIONS_STORE_KEY);
	const { enabled, url, loading, updating } = useSelect((select) => {
		const { getOption, isLoading, hasFinishedResolution } =
			select(OPTIONS_STORE_KEY);
		const { getCurrentlyRunning } = select(STORE_KEY);
		const currentlyRunning = getCurrentlyRunning();
		return {
			enabled: getOption(ENABLE_WCCOM_URL_OVERWRITE_OPTION),
			url: getOption(WCCOM_URL_OVERWRITE_OPTION),
			updating:
				!hasFinishedResolution('getOption', [
					ENABLE_WCCOM_URL_OVERWRITE_OPTION,
				]) ||
				(currentlyRunning &&
					currentlyRunning['Toggle overwriting woocommerce.com url']),
			isLoading: isLoading(),
		};
	});
	const [wcUrl, setWcUrl] = useState('');
	useEffect(() => {
		setWcUrl(url || 'http://woocommerce.test');
	}, [url]);

	const updateWcComUrlOption = useThrottle(
		(value) => {
			saveOption(WCCOM_URL_OVERWRITE_OPTION, JSON.stringify(value));
		},
		500,
		{ leading: false }
	);

	useEffect(() => {
		if (wcUrl !== url && wcUrl) {
			updateWcComUrlOption(wcUrl);
		}
	}, [wcUrl]);

	console.log(enabled);
	return (
		<div className="toggle-wccom-url">
			{loading || updating ? (
				<p>{loading || !enabled ? 'Loading' : 'Updating'}...</p>
			) : (
				<>
					<InputControl
						onChange={(val) => setWcUrl(val)}
						value={wcUrl}
					/>
					{enabled === 'yes' ? (
						<span style={{ color: 'green' }}>Enabled</span>
					) : (
						<span style={{ color: 'red' }}>Disabled</span>
					)}
				</>
			)}
		</div>
	);
};
