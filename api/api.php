<?php
function register_wp_rest_api_finder_rest_route( $route, $callback, $additional_options = array() ) {
    add_action( 'rest_api_init', function() use ( $route, $callback, $additional_options ) {

    	$default_options = array(
		    'methods'  => 'POST',
		    'callback' => $callback,
		    'permission_callback' => function( $request ) {
			    return true;
		    },
	    );

    	$default_options = array_merge( $default_options, $additional_options );

        register_rest_route(
            'wp-rest-api-finder',
            $route,
            $default_options
        );
    } );
}

require( 'options/rest-api.php' );
