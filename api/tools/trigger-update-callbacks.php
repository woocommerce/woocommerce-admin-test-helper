<?php

use Automattic\WooCommerce\Admin\Install;
use Automattic\WooCommerce\Admin\API\Reports\Cache;

register_woocommerce_admin_test_helper_rest_route(
	'/tools/get-update-versions/v1',
	'tools_get_wc_admin_versions',
	array(
		'methods' => 'GET',
	)
);
register_woocommerce_admin_test_helper_rest_route(
	'/tools/trigger-selected-update-callbacks/v1',
	'trigger_selected_update_callbacks',
	array(
		'methods' => 'POST',
		'args'                => array(
			'version'     => array(
				'description'       => 'Name of the update version',
				'type'              => 'string',
				'sanitize_callback' => 'sanitize_text_field',
			)
		),
	)
);

function tools_get_wc_admin_versions() {
	$db_updates  = Install::get_db_update_callbacks();

	return new WP_REST_Response( array_keys( $db_updates ), 200 );
}

function trigger_selected_update_callbacks( $request ) {
	$version = $request->get_param( 'version' );
	if ( ! isset( $version ) ) {
		return;
	}

	$db_updates = Install::get_db_update_callbacks();
	$update_callbacks = $db_updates[ $version ];

	foreach ( $update_callbacks as $update_callback ) {
		call_user_func( $update_callback );
	}

	return false;
}
