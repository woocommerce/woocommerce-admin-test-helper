<?php
add_action( 'admin_menu', function() {
	add_management_page(
		'WooCommerce Admin Test Helper',
		'WCA Test Helper',
		'install_plugins',
		'woocommerce-admin-test-helper',
		function() {
			?><div id="woocommerce-admin-test-helper">YEAAAAA</div><?php
		}
	);
} );
