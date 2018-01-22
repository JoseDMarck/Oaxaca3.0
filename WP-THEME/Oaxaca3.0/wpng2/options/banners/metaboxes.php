<?php ob_start(); ?>

<?php

  add_action( 'add_meta_boxes', 'page_banners' );
  function page_banners( $post ) {
  add_meta_box( 
  'em-img-meta', // atributo ID
  '<h1 style="color:#2980b9">Banners para el home</h1>', // Título
  'banners_home', // Función que muestra el HTML que aparecerá en la pantalla
  'page', // Tipo de entrada. Puede ser 'post', 'page', 'link', o 'custom_post_type'
  'normal', // Parte de la pantalla donde aparecerá. Puede ser 'normal', 'advanced', o 'side'
  'default' // Prioridad u orden en el que aparecerá. Puede ser 'high', 'core', 'default' o 'low'
  );
  }

  function banners_home( $post ) {
  
  $value_id_imagen_prueba = (get_post_meta($post->ID, 'id_imagen_prueba', true));
  $value_id_imagen_page = (get_post_meta($post->ID, 'id_imagen_page', true));

?>
<b><span style="color:#1abc9c">imagen prueba:</span></b> <br><br>
<input type="text" name="id_imagen_prueba" id="id_imagen_prueba" value="<?php echo $value_id_imagen_prueba; ?>" style="width: 600px;" /><br><br>

<b><span style="color:#1abc9c">Mes titulo:</span></b> <br><br>
<input type="text" name="id_imagen_page" id="id_imagen_page" value="<?php echo $value_id_imagen_page; ?>" style="width: 600px;" /><br><br>

<?php }


  add_action('save_post', 'post_dato_imagen_prueba');
  function post_dato_imagen_prueba() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['id_imagen_prueba'];
  update_post_meta($post_id, 'id_imagen_prueba', $var_1);
  }

   add_action('save_post', 'post_dato_imagen_page');
  function post_dato_imagen_page() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['id_imagen_page'];
  update_post_meta($post_id, 'id_imagen_page', $var_1);
  }

  ?>

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
?>