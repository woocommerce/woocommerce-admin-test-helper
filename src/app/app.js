/**
 * External dependencies
 */
import { TabPanel } from '@wordpress/components';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import { AdminNotes } from '../admin-notes';
import { default as Tools } from '../tools';
import { Tasks } from '../tasks';
import { default as Options } from '../options';

const tabs = applyFilters( 'woocommerce_admin_test_helper_tabs', [
	{
		name: 'options',
		title: 'Options',
		content: <Options />,
	},
	{
		name: 'admin-notes',
		title: 'Admin notes',
		content: <AdminNotes />,
	},
	{
		name: 'tools',
		title: 'Tools',
		content: <Tools />,
	},
	{
		name: 'tasks',
		title: 'Tasks',
		content: <Tasks />,
	},
]);

export function App() {
	return (
		<div className="wrap">
			<h1>WooCommerce Admin Test Helper</h1>
			<TabPanel
				className="woocommerce-admin-test-helper__main-tab-panel"
				activeClass="active-tab"
				tabs={ tabs }
				initialTabName={ tabs[ 0 ].name }
			>
				{ ( tab ) => (
					<>
						{ tab.content }
						{ applyFilters(
							`woocommerce_admin_test_helper_tab_${ tab.name }`,
							[]
						) }
					</>
				) }
			</TabPanel>
		</div>
	);
}
