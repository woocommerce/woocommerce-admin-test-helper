<?php
register_woocommerce_admin_test_helper_rest_route(
	'/tools/get-transient-list/v1',
	'tools_get_transient_list',
	array(
		'methods' => 'GET',
	)
);
register_woocommerce_admin_test_helper_rest_route(
	'/tools/clear-selected-transient/v1',
	'clear_selected_transient',
	array(
		'methods' => 'POST',
		'args'                => array(
			'transient'     => array(
				'description'       => 'Name of the transient that will be cleared.',
				'type'              => 'string',
				'sanitize_callback' => 'sanitize_text_field',
			),
		),
	)
);

const transient_list = array(
	array(
		'title' => 'Remote free extensions specs',
		'name' => 'woocommerce_admin_remote_free_extensions_specs',
	),
	array(
		'title' => 'Payment gateway suggestion specs',
		'name' => 'woocommerce_admin_payment_gateway_suggestions_specs',
	),
);

function tools_get_transient_list() {
	$existing_transients = array();

	foreach ( transient_list as $transient ) {
		if ( false !== get_transient( $transient['name'] ) ) {
			$existing_transients[] = $transient;
		}
	}
	return new WP_REST_Response( $existing_transients, 200 );
}

function clear_selected_transient( $request ) {
	$transient      = $request->get_param( 'transient' );

	if ( ! isset( $transient ) ) {
		return;
	}

	return new WP_REST_Response( delete_transient( $transient ), 200 );
}
