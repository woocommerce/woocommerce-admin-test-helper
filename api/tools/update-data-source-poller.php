<?php
register_woocommerce_admin_test_helper_rest_route(
	'/tools/update-data-source-poller/v1',
	'update_data_source_poller',
	array(
		'methods' => 'POST',
		'args'                => array(
			'dataSourceURL'     => array(
				'description'       => 'Data source poller URL.',
				'type'              => 'string',
				'sanitize_callback' => 'sanitize_text_field',
			),
		),
	)
);

register_woocommerce_admin_test_helper_rest_route(
	'/tools/get-data-source-poller-status/v1',
	'get_data_source_poller_status',
	array(
		'methods' => 'GET',
	)
);

function update_data_source_poller( $request ) {
	error_log("update_data_source_poller");
	$url = $request->get_param( 'dataSourceURL' );
	error_log($url);
	if ( '' === $url ) {
		return new WP_REST_Response( 'Bad Request', 400 );
	}

	
	update_option('wc_admin_test_helper_data_source_poller_url', $url );
	return new WP_REST_Response( true, 200 );
}

function get_data_source_poller_status() {
	$is_data_source_url_set = 'no' !== get_option( 'wc_admin_test_helper_data_source_poller_url', 'no' );
	return new WP_REST_Response( $is_data_source_url_set, 200 );
}

$data_source_url = get_option( 'wc_admin_test_helper_data_source_poller_url', 'no' );
if ( 'no' !== $data_source_url ) {
	add_filter(
		'data_source_poller_data_sources',
		function( $data_sources ) {
			$new_data_source_url = get_option( 'wc_admin_test_helper_data_source_poller_url', 'no' );
			$urls = array();
			foreach( $data_sources as $source ) {
				$modified_url = str_replace( 'https://woocommerce.com', $new_data_source_url, $source);
				array_push( $urls, $modified_url );
			}
			return $urls;
		}, 10, 2
	);
}
