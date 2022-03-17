/**
 * External dependencies
 */
import { apiFetch } from '@wordpress/data-controls';

/**
 * Internal dependencies
 */
import { setExperiments } from './actions';
import {
	EXPERIMENT_NAME_PREFIX,
	TRANSIENT_NAME_PREFIX,
	API_NAMESPACE,
} from './constants';

function getExperimentsFromFrontend() {
	const storageItems = Object.entries( { ...window.localStorage } ).filter(
		( item ) => {
			return item[ 0 ].indexOf( EXPERIMENT_NAME_PREFIX ) === 0;
		}
	);

	return storageItems.map( ( storageItem ) => {
		const [ key, value ] = storageItem;
		const objectValue = JSON.parse( value );
		return {
			name: key.replace( EXPERIMENT_NAME_PREFIX, '' ),
			variation: objectValue.variationName || 'control',
			source: 'frontend',
		};
	} );
}

export function* getExperiments() {
	try {
		const response = yield apiFetch( {
			path: `${ API_NAMESPACE }/experiments/backend`,
		} );

		const experimentsFromBackend = response.map( ( experiment ) => {
			return {
				name: experiment.option_name.replace(
					TRANSIENT_NAME_PREFIX,
					''
				),
				variation:
					experiment.option_value === 'control'
						? 'control'
						: 'treatment',
				source: 'backend',
			};
		} );
		yield setExperiments(
			getExperimentsFromFrontend().concat( experimentsFromBackend )
		);
	} catch ( error ) {
		throw new Error();
	}
}
