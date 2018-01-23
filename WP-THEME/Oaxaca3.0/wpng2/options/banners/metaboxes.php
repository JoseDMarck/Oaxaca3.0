<?php ob_start(); ?>

<?php

  add_action( 'add_meta_boxes', 'page_banners' );
  function page_banners( $post ) {
  add_meta_box( 
  'em-img-meta', // atributo ID
  '<h1 style="color:#2980b9">Banners de publicidad </h1>', // Título
  'banners_home', // Función que muestra el HTML que aparecerá en la pantalla
  'page', // Tipo de entrada. Puede ser 'post', 'page', 'link', o 'custom_post_type'
  'normal', // Parte de la pantalla donde aparecerá. Puede ser 'normal', 'advanced', o 'side'
  'default' // Prioridad u orden en el que aparecerá. Puede ser 'high', 'core', 'default' o 'low'
  );
  }

  function banners_home( $post ) {
  
 
  //BANNER 1
  $analitycs_banner_home_1 = (get_post_meta($post->ID, 'analitycs_banner_home_1', true));
  $url_banner_home_1 = (get_post_meta($post->ID, 'url_banner_home_1', true));
  $imagen_banner_1 = (get_post_meta($post->ID, 'imagen_banner_1', true)); 

  //BANNER 2
  $analitycs_banner_home_2 = (get_post_meta($post->ID, 'analitycs_banner_home_2', true));
  $url_banner_home_2 = (get_post_meta($post->ID, 'url_banner_home_2', true));
  $imagen_banner_2 = (get_post_meta($post->ID, 'imagen_banner_2', true)); 

   //BANNER 3
  $analitycs_banner_home_3 = (get_post_meta($post->ID, 'analitycs_banner_home_3', true));
  $url_banner_home_3 = (get_post_meta($post->ID, 'url_banner_home_3', true));
  $imagen_banner_3 = (get_post_meta($post->ID, 'imagen_banner_3', true)); 

   //BANNER _4
  $analitycs_banner_home_4 = (get_post_meta($post->ID, 'analitycs_banner_home_4', true));
  $url_banner_home_4 = (get_post_meta($post->ID, 'url_banner_home_4', true));
  $imagen_banner_4 = (get_post_meta($post->ID, 'imagen_banner_4', true)); 

 //BANNER _5
  $analitycs_banner_home_5 = (get_post_meta($post->ID, 'analitycs_banner_home_5', true));
  $url_banner_home_5 = (get_post_meta($post->ID, 'url_banner_home_5', true));
  $imagen_banner_5 = (get_post_meta($post->ID, 'imagen_banner_5', true)); 


 //BANNER _6
  $analitycs_banner_home_6 = (get_post_meta($post->ID, 'analitycs_banner_home_6', true));
  $url_banner_home_6 = (get_post_meta($post->ID, 'url_banner_home_6', true));
  $imagen_banner_6 = (get_post_meta($post->ID, 'imagen_banner_6', true)); 

   //BANNER _7
  $analitycs_banner_home_7 = (get_post_meta($post->ID, 'analitycs_banner_home_7', true));
  $url_banner_home_7 = (get_post_meta($post->ID, 'url_banner_home_7', true));
  $imagen_banner_7 = (get_post_meta($post->ID, 'imagen_banner_7', true)); 


   //BANNER _8
  $analitycs_banner_home_8 = (get_post_meta($post->ID, 'analitycs_banner_home_8', true));
  $url_banner_home_8 = (get_post_meta($post->ID, 'url_banner_home_8', true));
  $imagen_banner_8 = (get_post_meta($post->ID, 'imagen_banner_8', true)); 


   //BANNER _9
  $analitycs_banner_home_9 = (get_post_meta($post->ID, 'analitycs_banner_home_9', true));
  $url_banner_home_9 = (get_post_meta($post->ID, 'url_banner_home_9', true));
  $imagen_banner_9 = (get_post_meta($post->ID, 'imagen_banner_9', true)); 

   //BANNER _10
  $analitycs_banner_home_10 = (get_post_meta($post->ID, 'analitycs_banner_home_10', true));
  $url_banner_home_10 = (get_post_meta($post->ID, 'url_banner_home_10', true));
  $imagen_banner_10 = (get_post_meta($post->ID, 'imagen_banner_10', true));

   //BANNER _11
  $analitycs_banner_home_11 = (get_post_meta($post->ID, 'analitycs_banner_home_11', true));
  $url_banner_home_11 = (get_post_meta($post->ID, 'url_banner_home_11', true));
  $imagen_banner_11 = (get_post_meta($post->ID, 'imagen_banner_11', true));



  //BANNER POST ====================

  //BANNER POST _1
  $analitycs_banner_post_1 = (get_post_meta($post->ID, 'analitycs_banner_post_1', true));
  $url_banner_post_1 = (get_post_meta($post->ID, 'url_banner_post_1', true));
  $imagen_banner_post_1= (get_post_meta($post->ID, 'imagen_banner_post_1', true));

  //BANNER POST _2
  $analitycs_banner_post_2 = (get_post_meta($post->ID, 'analitycs_banner_post_2', true));
  $url_banner_post_2 = (get_post_meta($post->ID, 'url_banner_post_2', true));
  $imagen_banner_post_2= (get_post_meta($post->ID, 'imagen_banner_post_2', true)); 

   //BANNER POST _3
  $analitycs_banner_post_3 = (get_post_meta($post->ID, 'analitycs_banner_post_3', true));
  $url_banner_post_3 = (get_post_meta($post->ID, 'url_banner_post_3', true));
  $imagen_banner_post_3= (get_post_meta($post->ID, 'imagen_banner_post_3', true)); 

  //BANNER POST _4
  $analitycs_banner_post_4 = (get_post_meta($post->ID, 'analitycs_banner_post_4', true));
  $url_banner_post_4 = (get_post_meta($post->ID, 'url_banner_post_4', true));
  $imagen_banner_post_4= (get_post_meta($post->ID, 'imagen_banner_post_4', true)); 

  //BANNER POST _5
  $analitycs_banner_post_5 = (get_post_meta($post->ID, 'analitycs_banner_post_5', true));
  $url_banner_post_5 = (get_post_meta($post->ID, 'url_banner_post_5', true));
  $imagen_banner_post_5= (get_post_meta($post->ID, 'imagen_banner_post_5', true)); 

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

 
<div style="display: none;">
<b><span style="color:#1abc9c">Mes titulo:</span></b> <br><br>
<input type="text" name="id_imagen_page" id="id_imagen_page" value="<?php echo $value_id_imagen_page; ?>" style="width: 600px;" /><br><br><br><br><br><br>
</div>



<h1>Escogé el tipo de banner que deseas agregar</h1><br>
<select id="tipoBanner" name="tipoBanner">
  <option value="opcion_1" selected="selected">Banners para el home</option>
  <option value="opcion_2">Banners para post</option><br><br>
</select>


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


<?php 
// METABOX CARTELERA
include 'banners_home/banner_1.php';
include 'banners_home/banner_2.php';
include 'banners_home/banner_3.php';
include 'banners_home/banner_4.php';
include 'banners_home/banner_5.php';
include 'banners_home/banner_6.php';
include 'banners_home/banner_7.php';
include 'banners_home/banner_8.php';
include 'banners_home/banner_9.php';
include 'banners_home/banner_10.php';
include 'banners_home/banner_11.php';


?>

</div> <!-- Bloque_poup -->


</div><!-- Bloque Main -->


<!-- Banners para post ============= -->

<div class="BloqueMainPost">

<div class="Bloque_post_1 skake openBannerPost_1"><div class="txt_banners">Banner 1</div></div>
<div class="Bloque_post_2 skake openBannerPost_2"><div class="txt_banners">Banner 2</div></div>
<div class="Bloque_post_3 skake openBannerPost_3"><div class="txt_banners">Banner 3</div></div>
<div class="Bloque_post_4 skake openBannerPost_4"><div class="txt_banners">Banner 4</div></div>
<div class="Bloque_post_5 skake openBannerPost_5"><div class="txt_banners">Banner 5</div></div>

</div><!-- BloqueMainPost -->


<div class="Bloque_popupPost">

<?php 
//Banners para post
include 'banners_post/banner_1.php';
include 'banners_post/banner_2.php';
include 'banners_post/banner_3.php';
include 'banners_post/banner_4.php';
include 'banners_post/banner_5.php';
?>

</div>



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
include 'REST_API_REGISTER/banner_2.php';
include 'REST_API_REGISTER/banner_3.php';
include 'REST_API_REGISTER/banner_4.php';
include 'REST_API_REGISTER/banner_5.php';
include 'REST_API_REGISTER/banner_6.php';
include 'REST_API_REGISTER/banner_7.php';
include 'REST_API_REGISTER/banner_8.php';
include 'REST_API_REGISTER/banner_9.php';
include 'REST_API_REGISTER/banner_10.php';
include 'REST_API_REGISTER/banner_11.php';


// REST API BANNERS  POSAT
include 'REST_API_REGISTER/banner_post_1.php';
include 'REST_API_REGISTER/banner_post_2.php';
include 'REST_API_REGISTER/banner_post_3.php';
include 'REST_API_REGISTER/banner_post_4.php';
include 'REST_API_REGISTER/banner_post_5.php';


?>


