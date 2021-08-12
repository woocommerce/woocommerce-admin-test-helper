<?php

register_woocommerce_admin_test_helper_rest_route(
	'/tools/toggle-wccom-url-overwrite/v1',
	'tools_trigger_toggle_wccom_url_overwrite'
);

const ENABLE_WCCOM_URL_OVERWRITE_OPTION = 'wc_test_helper_enable_wccom_url_overwrite';
const WCCOM_URL_OVERWRITE_OPTION = 'wc_test_helper_wccom_url_ovewrite';
function possibly_overwrite_woocommerce_com_url( $preempt, $args, $url ) {
	if ( strpos($url, 'woocommerce.com') !== false && $args['method'] === 'GET' ) {
		$overwrite_url = get_option( WCCOM_URL_OVERWRITE_OPTION, 'http://woocommerce.test' );
		$new_url = preg_replace('/^(.*woocommerce.com)/', $overwrite_url, $url);
		return wp_remote_get( $new_url );
	}
	return false;
}

function possibly_add_overwrite_woocommerce_com_url_filter() {
	$enabled = get_option( ENABLE_WCCOM_URL_OVERWRITE_OPTION, 'no' ) === 'yes';
	$filter_added = has_filter( 'pre_http_request', 'possibly_overwrite_woocommerce_com_url' );
	if ( ! $filter_added && $enabled ) {
		add_filter('pre_http_request', 'possibly_overwrite_woocommerce_com_url', 10, 3);
	} else if ( ! $enabled && $filter_added ) {
		remove_filter('pre_http_request', 'possibly_overwrite_woocommerce_com_url', 10);
	}
}
possibly_add_overwrite_woocommerce_com_url_filter();

function tools_trigger_toggle_wccom_url_overwrite()
{
	$enabled = get_option( ENABLE_WCCOM_URL_OVERWRITE_OPTION, 'no' );
	update_option( ENABLE_WCCOM_URL_OVERWRITE_OPTION, $enabled === 'no' ? 'yes' : 'no' );
	possibly_add_overwrite_woocommerce_com_url_filter();
	return ! $enabled;
}
