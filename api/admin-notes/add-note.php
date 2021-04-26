<?php
use Automattic\WooCommerce\Admin\Notes\Note;

register_woocommerce_admin_test_helper_rest_route(
	'/admin-notes/add-note/v1',
	'admin_notes_add_note'
);


function admin_notes_add_note( $request ) {
	$note = new Note();
	$mock_note_data = get_mock_note_data();
	$type = $request->get_param( 'type' );
	$layout = $request->get_param( 'layout' );

	$note->set_name( $request->get_param( 'name' ) );
	$note->set_title( $request->get_param( 'title' ) );
	$note->set_content( $mock_note_data[ 'content' ] );
	$note->set_image( $mock_note_data[ $type ][ $layout ] );
	$note->set_layout( $layout );
	$note->set_type( $type );
	possibly_add_action( $note );
	
	if ( 'email' === $type ) {
		add_email_note_params( $note );
	}

	$note->save();

	return true;
}

function add_email_note_params( $note ) {
	$additional_data = array(
		'role' => 'administrator',
	);
	$note->set_content_data( (object) $additional_data );
}

function possibly_add_action( $note ) {
	if ( $note->get_type() === 'info' ) {
		return;
	}
	$action_name = sprintf(
		'test-action-%s',
		$note->get_name()
	);
	$note->add_action( $action_name, 'Test action', wc_admin_url() );
}

function get_mock_note_data() {
	return array(
		'content'   => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
		'info'      => array(
			'banner'    => 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAK9Xg4L6FGmDAW5UVtVEv1IXKtGV3-rxYLfAzOBF-fMUdmyWz&usqp=CAU',
			'thumbnail' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlm2mX1h6GfMnT9sDD9GsJB7of3MZw3UDzCAQM9EBepiJzyxXH&usqp=CAU',
			'plain'     => ''
		),
		'email'     => array(
			'plain' => 'https://www.logosvgpng.com/wp-content/uploads/2018/10/woocommerce-logo-vector.png'
		),
		'update'    => array(
			'plain' => ''
		)
	);
}
