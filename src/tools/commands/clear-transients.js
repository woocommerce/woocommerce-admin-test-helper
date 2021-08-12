/**
 * External dependencies.
 */
import { SelectControl } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_KEY } from '../data/constants';

export const CLEAR_TRANSIENT_ACTION_NAME = 'clearTransient';

export const ClearTransients = () => {
	const { transients } = useSelect((select) => {
		const { getTransients } = select(STORE_KEY);
		return {
			transients: getTransients(),
		};
	});
	const { updateCommandParams } = useDispatch(STORE_KEY);

	function onTransientChange(selectedValue) {
		updateCommandParams(CLEAR_TRANSIENT_ACTION_NAME, {
			transient: selectedValue,
		});
	}

	function getOptions() {
		return [
			{ label: 'none', value: '' },
			...transients.map(({ name, title }) => {
				return { label: title, value: name };
			}),
		];
	}

	return (
		<div className="trigger-cron-job">
			{!transients ? (
				<p>Loading ...</p>
			) : (
				<SelectControl
					defaultValue=""
					label="Select transient to clear"
					onChange={onTransientChange}
					labelPosition="side"
					options={getOptions()}
				/>
			)}
		</div>
	);
};
