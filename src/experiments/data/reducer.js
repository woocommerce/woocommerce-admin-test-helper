/**
 * Internal dependencies
 */
import TYPES from './action-types';

const DEFAULT_STATE = {
	experiments: [],
};

const reducer = ( state = DEFAULT_STATE, action ) => {
	switch ( action.type ) {
		case TYPES.ADD_EXPERIMENT:
			const existingExperimentIndex = state.experiments.findIndex(
				( element ) => {
					return element.name === action.experimentName;
				}
			);
			const newExperiment = {
				name: action.experimentName,
				source: action.source,
				variation: action.variation,
			};
			const newExperiments =
				existingExperimentIndex !== -1
					? state.experiments
							.slice( 0, existingExperimentIndex )
							.concat( newExperiment )
							.concat(
								state.experiments.slice(
									existingExperimentIndex + 1
								)
							)
					: [
							...state.experiments,
							{
								name: action.experimentName,
								source: action.source,
								variation: action.variation,
							},
					  ];

			return {
				...state,
				experiments: newExperiments,
			};
		case TYPES.TOGGLE_EXPERIMENT:
			return {
				...state,
				experiments: state.experiments.map( ( experiment ) => ( {
					...experiment,
					variation:
						experiment.name === action.experimentName &&
						experiment.source === action.source
							? action.newVariation
							: experiment.variation,
				} ) ),
			};
		case TYPES.SET_EXPERIMENTS:
			return {
				...state,
				experiments: action.experiments,
			};
		default:
			return state;
	}
};

export default reducer;
