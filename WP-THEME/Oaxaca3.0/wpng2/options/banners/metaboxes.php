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

∑

<?php 
// METABOX CARTELERA
include 'banners_home/banner_1.php';
?>



</div> <!-- Bloque_poup -->
</div><!-- Bloque Main -->

<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/options/js/jquery.1.9.1.min.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/options/js/eventos.js"></script>
<?php }

/* ACTIONS WP */
include 'actions.php';

?>

<?php 


// REST API
include 'REST_API_REGISTER/generales.php';

// REST API BANNERS 
include 'REST_API_REGISTER/banner_1.php';

?>


