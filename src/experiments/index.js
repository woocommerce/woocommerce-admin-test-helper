/**
 * External dependencies
 */
import { withDispatch, withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { Button } from '@wordpress/components';
import { OPTIONS_STORE_NAME } from '@woocommerce/data';
/**
 * Internal dependencies
 */
import { STORE_KEY } from './data/constants';
import './data';

function Experiments( {
	experiments,
	toggleExperiment,
	isTrackingEnabled,
	isResolving,
} ) {
	if ( isResolving ) {
		return null;
	}
	return (
		<div id="wc-admin-test-helper-experiments">
			<h2>Experiments</h2>
			{ isTrackingEnabled === 'no' && (
				<p className="tracking-disabled">
					The following list might not be complete without tracking
					enabled. <br />
					Please visit&nbsp;
					<a
						target="_blank"
						href={
							wcSettings.adminUrl +
							'/admin.php?page=wc-settings&tab=advanced&section=woocommerce_com'
						}
						rel="noreferrer"
					>
						WooCommerce &#8594; Settings &#8594; Advanced &#8594;
						Woocommerce.com
					</a>
					&nbsp;and check{ ' ' }
					<b>Allow usage of WooCommerce to be tracked</b>.
				</p>
			) }
			<table className="experiments wp-list-table striped table-view-list widefat">
				<thead>
					<tr>
						<th>Experiment</th>
						<th>Variation</th>
						<th>Source</th>
						<th>Toggle</th>
					</tr>
				</thead>
				<tbody>
					{ experiments.map(
						( { name, variation, source }, index ) => {
							return (
								<tr key={ index }>
									<td className="experiment-name">
										{ name }
									</td>
									<td align="center">{ variation }</td>
									<td align="center">{ source }</td>
									<td align="center">
										<Button
											onClick={ () => {
												toggleExperiment(
													name,
													variation,
													source
												);
											} }
											isPrimary
										>
											Toggle
										</Button>
									</td>
								</tr>
							);
						}
					) }
				</tbody>
			</table>
		</div>
	);
}

export default compose(
	withSelect( ( select ) => {
		const { getExperiments } = select( STORE_KEY );
		const { getOption, isResolving } = select( OPTIONS_STORE_NAME );

		return {
			experiments: getExperiments(),
			isTrackingEnabled: getOption( 'woocommerce_allow_tracking' ),
			isResolving: isResolving( 'getOption', [ 'getExperiments' ] ),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { toggleExperiment } = dispatch( STORE_KEY );

		return {
			toggleExperiment,
		};
	} )
)( Experiments );
