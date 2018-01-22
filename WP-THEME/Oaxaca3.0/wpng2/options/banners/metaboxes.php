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

  //BANNER 1
  $analitycs_banner_home_1 = (get_post_meta($post->ID, 'analitycs_banner_home_1', true));
  $url_banner_home_1 = (get_post_meta($post->ID, 'url_banner_home_1', true));
  $imagen_banner_1 = (get_post_meta($post->ID, 'imagen_banner_1', true)); 


?>


<style>
 
#titulocont {
  width: 760px;
  height: 50px;
  background-color: #222 
} 

#titulocont > h2 {
  color: #FFF;
  margin-left: 10px;
}

#mainBlock  h2 {
  color: #fff;
}

#mainBlock{
  width: 720px;
  background-color: #666;
  height: auto;
  color: #fff;
  padding: 20px;
}

#contenedorBHome{
  height: 270px;
  }

#bannerhome1 {
  float: left;
  margin-right: 10px;
}

#bannerhome2{
  float: left;
  margin-right: 10px;
}

#bannerhome3{
  float: left;
  margin-right: 10px;
}


</style>

<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri();?>/options/styleBanners.css">

<b><span style="color:#1abc9c">imagen prueba:</span></b> <br><br>
<input type="text" name="id_imagen_prueba" id="id_imagen_prueba" value="<?php echo $value_id_imagen_prueba; ?>" style="width: 600px;" /><br><br>

<b><span style="color:#1abc9c">Mes titulo:</span></b> <br><br>
<input type="text" name="id_imagen_page" id="id_imagen_page" value="<?php echo $value_id_imagen_page; ?>" style="width: 600px;" /><br><br>

<div class="BloqueMain">

  <div class="Bloque1 skake openBanner_1"><div class="txt_banners">Banner 1</div></div>
  <div class="Bloque2 skake openBanner_2"><div class="txt_banners">Banner 2</div></div>
  <div class="Bloque3 skake openBanner_3"><div class="txt_banners">Banner 3</div></div>
  <div class="Bloque4 skake openBanner_4"><div class="txt_banners">Banner 4</div></div>
  <div class="Bloque5 skake openBanner_5"><div class="txt_banners">Banner 5</div></div>
  <div class="Bloque6 skake openBanner_6"><div class="txt_banners">Banner 6</div></div>
  <div class="Bloque7 skake openBanner_7"><div class="txt_banners">Banner 7</div></div>
  <div class="Bloque8 skake openBanner_8"><div class="txt_banners">Banner 8</div></div>
  <div class="Bloque9 skake openBanner_9"><div class="txt_banners">Banner 9</div></div>
  <div class="Bloque10 skake openBanner_10"><div class="txt_banners">Banner 10</div></div>
  <div class="Bloque11 skake openBanner_11"><div class="txt_banners">Banner 11</div></div>



<div class="Bloque_popup">

<!-- ==============================================  
 BANNER 1
============================================== -->   

<!-- Para Banner No. 1 -->
<div class="ContenedorDatos ContenedorBanner_1">
  <h1>Banner No.1 | Tamaño recomendado: 728px por 90px </h1><br>
  <div class="closebtnPopup"></div> 

  <!-- GOOGLE ANALITYCS -->
  <div class="titulosBanners">1.- Código para Google Analitycs </div>
  <textarea  name="analitycs_banner_home_1" id="analitycs_banner_home_1" rows="5" cols="50"> 
     <?php echo $analitycs_banner_home_1; ?>
  </textarea><br><br>


  <div class="titulosBanners">2.- Subir imagen Propia</div>
                
    <?php // Banner imagen 1 ***************************************************

            if(function_exists( 'wp_enqueue_media' )){
                wp_enqueue_media();
            }else{
                wp_enqueue_style('thickbox');
                wp_enqueue_script('media-upload');
                wp_enqueue_script('thickbox');
            }
            ?>


            <p>
            <?php
            // Comparamos si existe la URL *****************
             
                
                if ($imagen_banner_1 != '') {?> 
                   <img class="banner_class_1" src="<?php echo $imagen_banner_1 ?>"  width="728" height="90" style="cursor:pointer;"/>
                <?php }


                else { ?>
                    <img class="banner_class_1" src="<?php echo get_template_directory_uri();?>/options/images/defaultlogo.png"  width="228" height="110"  style="cursor:pointer;"/>  
               <?php } ?> 

                <!--Banner URL -->
                 <div class="titulosBanners">URL del Banner</div>
                 <p>Introduce la URL a dónde redireccionará el banner</p>
                 <input type="text" class="url_class_banner_home_1" id="url_banner_home_1" name="url_banner_home_1" size="80" value="<?php echo $url_banner_home_1; ?>"> <br>


                  <br />
                  <input class="banner_class_url_1" id="imagen_banner_1"  type="text" name="imagen_banner_1" size="30" value="<?php echo $imagen_banner_1; ?>" style="display:none">
                 <button onclick="Function_banner_1()"  class="button-primary">Borrar Imagen</button> <br><br>
                 <center>
                    <button class="button-primary button-aceptar">Guardar cambios</button>
                 </center>
            </p> 

            <hr>
            <script>
                jQuery(document).ready(function($) {
                    $('.banner_class_1').click(function(e) {
                        e.preventDefault();

                        var custom_uploader = wp.media({
                            title: 'Custom Image',
                            button: {
                                text: 'Upload Image'
                            },
                            multiple: false  // Set this to true to allow multiple files to be selected
                        })
                        .on('select', function() {
                            var attachment = custom_uploader.state().get('selection').first().toJSON();
                            $('.imagen_banner_1').attr('src', attachment.url);
                            $('.banner_class_url_1').val(attachment.url);
                        })
                        .open();
                    });
                });

                function Function_banner_1() { 
                  document.getElementById("imagen_banner_1").value = "";    
                  document.getElementById("url_banner_home_1").value = "";    
                }
                
            </script>


</div><!-- ContenedorDatos -->




</div> <!-- Bloque_poup -->


</div><!-- Bloque Main -->

<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/options/js/jquery.1.9.1.min.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/options/js/eventos.js"></script>
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


  //BANERS HOME
  add_action('save_post', 'post_analitycs_banner_home_1');
  function post_analitycs_banner_home_1() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['analitycs_banner_home_1'];
  update_post_meta($post_id, 'analitycs_banner_home_1', $var_1);
  }


  add_action('save_post', 'post_imagen_banner_1');
  function post_imagen_banner_1() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['imagen_banner_1'];
  update_post_meta($post_id, 'imagen_banner_1', $var_1);
  }


  add_action('save_post', 'post_url_banner_home_1');
  function post_url_banner_home_1() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['url_banner_home_1'];
  update_post_meta($post_id, 'url_banner_home_1', $var_1);
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


