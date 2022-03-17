<?php
register_woocommerce_admin_test_helper_rest_route(
	'/experiments/backend',
	'wca_test_helper_get_backend_experiments',
	array(
		'methods' => 'GET',
	)
);

function wca_test_helper_get_backend_experiments_from_db() {
	global $wpdb;

	$query = "
        select option_id, option_name, option_value, autoload
        from {$wpdb->prefix}options where option_name like '%_transient_abtest_variation_%'
		order by option_id desc
    ";

	return $wpdb->get_results( $query );	
}

function wca_test_helper_get_backend_experiments( $request ) {
	if ( wp_using_ext_object_cache() ) {
		$experiments = wca_test_helper_get_backend_experiments_from_db();
	} else {
		$experiments = wca_test_helper_get_backend_experiments_from_db();
	}

	return new WP_REST_Response( $experiments, 200 );
}

