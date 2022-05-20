<?php
add_action( 'admin_menu', function() {
	add_management_page(
		'WordPress REST API Finder',
		'REST API Finder',
		'install_plugins',
		'wordpress-rest-api-finder',
		function() {
			?><div id="wordpress-rest-api-finder-app-root"></div><?php
		}
	);
} );

add_action( 'wp_loaded', function() {
	require( 'api/api.php' );
} );