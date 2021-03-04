/**
 * External dependencies
 */
import { withDispatch, withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import { STORE_KEY } from './data/constants';
import './data';

function Options( {
	options,
	getOptions,
	deleteOptionById,
	invalidateResolutionForStoreSelector,
} ) {
	const deleteOption = function ( optionId ) {
		// eslint-disable-next-line no-alert
		if ( confirm( 'Are you sure you want to delete?' ) ) {
			deleteOptionById( optionId );
		}
	};

	const renderTableData = function () {
		return options.map( ( option ) => {
			// eslint-disable-next-line camelcase
			const { option_id, option_name, autoload } = option;

			// eslint-disable-next-line camelcase
			const optionId = option_id;
			// eslint-disable-next-line camelcase
			const optionName = option_name;

			return (
				<tr key={ optionId }>
					<td key={ 0 }>{ optionId }</td>
					<td key={ 1 }>{ optionName }</td>
					<td key={ 2 }>{ autoload }</td>
					<td key={ 3 }>
						<button
							className="button btn-danger"
							onClick={ () => deleteOption( optionId ) }
						>
							Delete
						</button>
					</td>
				</tr>
			);
		} );
	};

	const searchOption = function ( event ) {
		event.preventDefault();
		let keyword = event.target.search.value;
		if ( keyword === '' ) {
			keyword = undefined;
		}
		getOptions( keyword );

		// force invlidation of the cached selector resolvers
		invalidateResolutionForStoreSelector( 'getOptions' );
	};

	return (
		<div id="wc-admin-test-helper-options">
			<form onSubmit={ searchOption }>
				<div className="search-box">
					<label
						className="screen-reader-text"
						htmlFor="post-search-input"
					>
						Search products:
					</label>
					<input type="search" name="search" />
					<input
						type="submit"
						id="search-submit"
						className="button"
						value="Search Option"
					/>
				</div>
			</form>
			<div className="clear"></div>
			<table className="wp-list-table striped table-view-list widefat">
				<thead>
					<tr>
						<td className="manage-column column-thumb" key={ 0 }>
							I.D
						</td>
						<td className="manage-column column-thumb" key={ 1 }>
							Name
						</td>
						<td className="manage-column column-thumb" key={ 2 }>
							Autoload
						</td>
						<td className="manage-column column-thumb" key={ 3 }>
							Delete
						</td>
					</tr>
				</thead>
				<tbody>{ renderTableData() }</tbody>
			</table>
		</div>
	);
}

export default compose(
	withSelect( ( select ) => {
		const { getOptions } = select( STORE_KEY );
		const options = getOptions();
		return { options, getOptions };
	} ),
	withDispatch( ( dispatch ) => {
		const {
			deleteOptionById,
			invalidateResolutionForStoreSelector,
		} = dispatch( STORE_KEY );
		return { deleteOptionById, invalidateResolutionForStoreSelector };
	} )
)( Options );