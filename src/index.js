/**
 * External dependencies
 */
import { render } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { App } from './app';
import './index.scss';

const appRoot = document.getElementById( 'wordpress-rest-api-finder-app-root' );

if ( appRoot ) {
	render( <App />, appRoot );
}
