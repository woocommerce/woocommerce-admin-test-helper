<?php
/**
 * Plugin Name: WordPress Rest API Finder
 * Author: Moon
 * Version: 0.0.1
 */

define( 'WP_REST_API_FINDER_PLUGIN_FILE', 'rest-api-finder/rest-api-finder' );

/**
 * Register the JS.
 */
function rest_api_finder_add_extension_register_script() {
	$script_path       = '/build/index.js';
	$script_asset_path = dirname( __FILE__ ) . '/build/index.asset.php';
	$script_asset      = file_exists( $script_asset_path )
		? require( $script_asset_path )
		: array( 'dependencies' => array(), 'version' => filemtime( $script_path ) );
	$script_url = plugins_url( $script_path, __FILE__ );

	wp_register_script(
		'wp-rest-api-finder',
		$script_url,
		$script_asset['dependencies'],
		$script_asset['version'],
		true
	);
	wp_enqueue_script( 'wp-rest-api-finder' );

	$css_file_version = filemtime( dirname( __FILE__ ) . '/build/index.css' );

	wp_register_style(
		'wp-components',
		plugins_url( 'dist/components/style.css', WP_REST_API_FINDER_PLUGIN_FILE ),
		array(),
		$css_file_version
	);

	wp_register_style(
		'wp-rest-api-finder',
		plugins_url( '/build/index.css', __FILE__ ),
		// Add any dependencies styles may have, such as wp-components.
		array(
			'wp-components'
		),
		$css_file_version
	);

	wp_enqueue_style( 'wp-rest-api-finder' );
}

add_action( 'plugins_loaded', function() {
	if ( ! defined( 'WC_PLUGIN_FILE' ) ) {
		return;
	}
	
	add_action( 'admin_enqueue_scripts', 'rest_api_finder_add_extension_register_script' );

	// Load the plugin
	require( 'plugin.php' );
});


