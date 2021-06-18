<?php
/**
 * Plugin Name: WooCommerce Admin Test Helper
 * Plugin URI: https://github.com/woocommerce/woocommerce-admin-test-helper
 * Description: A helper plugin to assist with testing WooCommerce Admin
 * Author: WooCommerce
 * Author URI: https://woocommerce.com/
 * Version: 0.4.0
 *
 * @package WooCommerce\Admin\TestHelper
 */

define( 'WC_ADMIN_TEST_HELPER_PLUGIN_FILE', 'woocommerce-admin-test-helper/woocommerce-admin-test-helper.php' );

/**
 * Register the JS.
 */
function add_wc_admin_helper_extension_register_script( $hook_suffix ) {
	if ( 'tools_page_woocommerce-admin-test-helper' !== $hook_suffix ) {
		return;
	}
	$script_path       = '/build/index.js';
	$script_asset_path = dirname( __FILE__ ) . '/build/index.asset.php';
	$script_asset      = file_exists( $script_asset_path )
		? require( $script_asset_path )
		: array( 'dependencies' => array(), 'version' => filemtime( $script_path ) );
	$script_url = plugins_url( $script_path, __FILE__ );

	wp_register_script(
		'woocommerce-admin-test-helper',
		$script_url,
		$script_asset['dependencies'],
		$script_asset['version'],
		true
	);
	wp_enqueue_script( 'woocommerce-admin-test-helper' );

	$css_file_version = filemtime( dirname( __FILE__ ) . '/build/index.css' );

	wp_register_style(
		'wp-components',
		plugins_url( 'dist/components/style.css', WC_ADMIN_TEST_HELPER_PLUGIN_FILE ),
		array(),
		$css_file_version
	);

	wp_register_style(
		'woocommerce-admin-test-helper',
		plugins_url( '/build/index.css', __FILE__ ),
		// Add any dependencies styles may have, such as wp-components.
		array(
			'wp-components'
		),
		$css_file_version
	);

	wp_enqueue_style( 'woocommerce-admin-test-helper' );
}

add_action( 'admin_enqueue_scripts', 'add_wc_admin_helper_extension_register_script' );

function add_extended_task_list_script() {
	$inline_config = array(
		'extendedTasks' => json_decode(get_option('woocommerce_admin_test_helper_extended_tasks', '[]'))
	);
	wp_register_script( 'woocommerce-admin-test-helper-config', '' );
	wp_enqueue_script( 'woocommerce-admin-test-helper-config' );
	wp_add_inline_script( 'woocommerce-admin-test-helper-config', 'window.wcAdminTestHelperConfig = ' . wp_json_encode( $inline_config ), 'before' );

	$script_path       = '/build/extended-tasks.js';
	$script_url = plugins_url( $script_path, __FILE__ );
	$script_asset_path = dirname( __FILE__ ) . '/build/extended-tasks.asset.php';
	$script_asset      = file_exists( $script_asset_path )
		? require( $script_asset_path )
		: array( 'dependencies' => array(), 'version' => filemtime( $script_path ) );

	wp_enqueue_script(
		'woocommerce-admin-test-helper-extended-tasks',
		$script_url,
		$script_asset['dependencies'],
		$script_asset['version'],
		true
	);
}

add_action( 'admin_enqueue_scripts', 'add_extended_task_list_script' );

// Load the plugin
require( 'plugin.php' );
