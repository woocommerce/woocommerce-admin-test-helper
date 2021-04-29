/**
 * External dependencies
 */
import { render } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { App } from './app';
import './index.scss';
import './tasks/add-tasks';

const appRoot = document.getElementById(
	'woocommerce-admin-test-helper-app-root'
);

if (appRoot) {
	render(<App />, appRoot);
}
