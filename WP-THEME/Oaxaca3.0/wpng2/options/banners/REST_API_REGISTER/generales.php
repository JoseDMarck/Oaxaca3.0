<?php

/*------------------------------------------*\
     BANNERS PAGE RESISTER ON REST API
\*-------------------------------------------*/
add_action( 'rest_api_init', 'slug_register_id_imagen_prueba' );
function slug_register_id_imagen_prueba() {
    register_rest_field( 'page',
        'imagen_prueba',
        array(
            'get_callback'    => 'slug_get_imagen_prueba',
            'update_callback' => 'slug_update_imagen_prueba',
            'schema'          => null,
        )
    );
}

function slug_get_imagen_prueba( $post, $field_name, $request ) {
     return get_post_meta($post['id'], 'id_imagen_prueba', true);
}


function slug_update_imagen_prueba( $value, $object, $field_name ) {
    if ( ! $value || ! is_string( $value ) ) { return; }
    return update_post_meta( $object->ID, $field_name, strip_tags( $value ) );
}

/*------------------------------------------*\
     BANNERS PAGE RESISTER ON REST API
\*-------------------------------------------*/
add_action( 'rest_api_init', 'slug_register_id_imagen_page' );
function slug_register_id_imagen_page() {
    register_rest_field( 'page',
        'imagen_page',
        array(
            'get_callback'    => 'slug_get_imagen_page',
            'update_callback' => 'slug_update_imagen_page',
            'schema'          => null,
        )
    );
}

function slug_get_imagen_page( $post, $field_name, $request ) {
     return get_post_meta($post['id'], 'id_imagen_page', true);
}


function slug_update_imagen_page( $value, $object, $field_name ) {
    if ( ! $value || ! is_string( $value ) ) { return; }
    return update_post_meta( $object->ID, $field_name, strip_tags( $value ) );
}
 