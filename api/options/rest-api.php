<?php

register_wp_rest_api_finder_rest_route(
	'/options',
	'wca_test_helper_get_options',
	array(
		'methods' => 'GET',
		'args'                => array(
			'page'     => array(
				'description'       => 'Current page of the collection.',
				'type'              => 'integer',
				'default'           => 1,
				'sanitize_callback' => 'absint',
			),
			'per_page' => array(
				'description'       => 'Maximum number of items to be returned in result set.',
				'type'              => 'integer',
				'default'           => 10,
				'sanitize_callback' => 'absint',
			),
			'search'   => array(
				'description'       => 'Limit results to those matching a string.',
				'type'              => 'string',
				'sanitize_callback' => 'sanitize_text_field',
			),
		),
	)
);

register_wp_rest_api_finder_rest_route(
	'/options/(?P<option_names>(.*)+)',
	'wca_test_helper_delete_option',
	array(
		'methods' => 'DELETE',
		'args'                => array(
			'option_names' => array(
				'type'              => 'string',
			),
		),
	)
);
