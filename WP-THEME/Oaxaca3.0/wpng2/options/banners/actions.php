<?php 


  add_action('save_post', 'post_dato_imagen_page');
  function post_dato_imagen_page() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['id_imagen_page'];
  update_post_meta($post_id, 'id_imagen_page', $var_1);
  }


  //BANERS HOME no 1
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


  //BANERS HOME NO 2
  add_action('save_post', 'post_analitycs_banner_home_2');
  function post_analitycs_banner_home_2() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['analitycs_banner_home_2'];
  update_post_meta($post_id, 'analitycs_banner_home_2', $var_1);
  }


  add_action('save_post', 'post_imagen_banner_2');
  function post_imagen_banner_2() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['imagen_banner_2'];
  update_post_meta($post_id, 'imagen_banner_2', $var_1);
  }


  add_action('save_post', 'post_url_banner_home_2');
  function post_url_banner_home_2() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['url_banner_home_2'];
  update_post_meta($post_id, 'url_banner_home_2', $var_1);
  }


 
  //BANERS HOME NO 3
  add_action('save_post', 'post_analitycs_banner_home_3');
  function post_analitycs_banner_home_3() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['analitycs_banner_home_3'];
  update_post_meta($post_id, 'analitycs_banner_home_3', $var_1);
  }


  add_action('save_post', 'post_imagen_banner_3');
  function post_imagen_banner_3() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['imagen_banner_3'];
  update_post_meta($post_id, 'imagen_banner_3', $var_1);
  }


  add_action('save_post', 'post_url_banner_home_3');
  function post_url_banner_home_3() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['url_banner_home_3'];
  update_post_meta($post_id, 'url_banner_home_3', $var_1);
  }


  //BANERS HOME NO _4
  add_action('save_post', 'post_analitycs_banner_home_4');
  function post_analitycs_banner_home_4() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['analitycs_banner_home_4'];
  update_post_meta($post_id, 'analitycs_banner_home_4', $var_1);
  }


  add_action('save_post', 'post_imagen_banner_4');
  function post_imagen_banner_4() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['imagen_banner_4'];
  update_post_meta($post_id, 'imagen_banner_4', $var_1);
  }


  add_action('save_post', 'post_url_banner_home_4');
  function post_url_banner_home_4() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['url_banner_home_4'];
  update_post_meta($post_id, 'url_banner_home_4', $var_1);
  }

 
  //BANERS HOME NO _5
  add_action('save_post', 'post_analitycs_banner_home_5');
  function post_analitycs_banner_home_5() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['analitycs_banner_home_5'];
  update_post_meta($post_id, 'analitycs_banner_home_5', $var_1);
  }


  add_action('save_post', 'post_imagen_banner_5');
  function post_imagen_banner_5() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['imagen_banner_5'];
  update_post_meta($post_id, 'imagen_banner_5', $var_1);
  }


  add_action('save_post', 'post_url_banner_home_5');
  function post_url_banner_home_5() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['url_banner_home_5'];
  update_post_meta($post_id, 'url_banner_home_5', $var_1);
  }


//BANERS HOME NO _6
  add_action('save_post', 'post_analitycs_banner_home_6');
  function post_analitycs_banner_home_6() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['analitycs_banner_home_6'];
  update_post_meta($post_id, 'analitycs_banner_home_6', $var_1);
  }


  add_action('save_post', 'post_imagen_banner_6');
  function post_imagen_banner_6() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['imagen_banner_6'];
  update_post_meta($post_id, 'imagen_banner_6', $var_1);
  }


  add_action('save_post', 'post_url_banner_home_6');
  function post_url_banner_home_6() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['url_banner_home_6'];
  update_post_meta($post_id, 'url_banner_home_6', $var_1);
  }


  //BANERS HOME NO _7
  add_action('save_post', 'post_analitycs_banner_home_7');
  function post_analitycs_banner_home_7() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['analitycs_banner_home_7'];
  update_post_meta($post_id, 'analitycs_banner_home_7', $var_1);
  }


  add_action('save_post', 'post_imagen_banner_7');
  function post_imagen_banner_7() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['imagen_banner_7'];
  update_post_meta($post_id, 'imagen_banner_7', $var_1);
  }


  add_action('save_post', 'post_url_banner_home_7');
  function post_url_banner_home_7() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['url_banner_home_7'];
  update_post_meta($post_id, 'url_banner_home_7', $var_1);
  }


  //BANERS HOME NO _8
  add_action('save_post', 'post_analitycs_banner_home_8');
  function post_analitycs_banner_home_8() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['analitycs_banner_home_8'];
  update_post_meta($post_id, 'analitycs_banner_home_8', $var_1);
  }


  add_action('save_post', 'post_imagen_banner_8');
  function post_imagen_banner_8() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['imagen_banner_8'];
  update_post_meta($post_id, 'imagen_banner_8', $var_1);
  }


  add_action('save_post', 'post_url_banner_home_8');
  function post_url_banner_home_8() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['url_banner_home_8'];
  update_post_meta($post_id, 'url_banner_home_8', $var_1);
  }


//BANERS HOME NO _9
  add_action('save_post', 'post_analitycs_banner_home_9');
  function post_analitycs_banner_home_9() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['analitycs_banner_home_9'];
  update_post_meta($post_id, 'analitycs_banner_home_9', $var_1);
  }


  add_action('save_post', 'post_imagen_banner_9');
  function post_imagen_banner_9() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['imagen_banner_9'];
  update_post_meta($post_id, 'imagen_banner_9', $var_1);
  }


  add_action('save_post', 'post_url_banner_home_9');
  function post_url_banner_home_9() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['url_banner_home_9'];
  update_post_meta($post_id, 'url_banner_home_9', $var_1);
  }


  //BANERS HOME NO _10
  add_action('save_post', 'post_analitycs_banner_home_10');
  function post_analitycs_banner_home_10() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['analitycs_banner_home_10'];
  update_post_meta($post_id, 'analitycs_banner_home_10', $var_1);
  }


  add_action('save_post', 'post_imagen_banner_10');
  function post_imagen_banner_10() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['imagen_banner_10'];
  update_post_meta($post_id, 'imagen_banner_10', $var_1);
  }


  add_action('save_post', 'post_url_banner_home_10');
  function post_url_banner_home_10() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['url_banner_home_10'];
  update_post_meta($post_id, 'url_banner_home_10', $var_1);
  }



//BANERS HOME NO _11
  add_action('save_post', 'post_analitycs_banner_home_11');
  function post_analitycs_banner_home_11() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['analitycs_banner_home_11'];
  update_post_meta($post_id, 'analitycs_banner_home_11', $var_1);
  }


  add_action('save_post', 'post_imagen_banner_11');
  function post_imagen_banner_11() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['imagen_banner_11'];
  update_post_meta($post_id, 'imagen_banner_11', $var_1);
  }


  add_action('save_post', 'post_url_banner_home_11');
  function post_url_banner_home_11() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['url_banner_home_11'];
  update_post_meta($post_id, 'url_banner_home_11', $var_1);
  }


// PARA LOS BANNERS DEL POST


  //BANERS HOME NO _1
   add_action('save_post', 'post_analitycs_banner_post_1');
  function post_analitycs_banner_post_1() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['analitycs_banner_post_1'];
  update_post_meta($post_id, 'analitycs_banner_post_1', $var_1);
  }


  add_action('save_post', 'post_imagen_banner_post_1');
  function post_imagen_banner_post_1() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['imagen_banner_post_1'];
  update_post_meta($post_id, 'imagen_banner_post_1', $var_1);
  }


  add_action('save_post', 'post_url_banner_post_1');
  function post_url_banner_post_1() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['url_banner_post_1'];
  update_post_meta($post_id, 'url_banner_post_1', $var_1);
  } 


//BANERS HOME NO _2
   add_action('save_post', 'post_analitycs_banner_post_2');
  function post_analitycs_banner_post_2() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['analitycs_banner_post_2'];
  update_post_meta($post_id, 'analitycs_banner_post_2', $var_1);
  }


  add_action('save_post', 'post_imagen_banner_post_2');
  function post_imagen_banner_post_2() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['imagen_banner_post_2'];
  update_post_meta($post_id, 'imagen_banner_post_2', $var_1);
  }


  add_action('save_post', 'post_url_banner_post_2');
  function post_url_banner_post_2() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['url_banner_post_2'];
  update_post_meta($post_id, 'url_banner_post_2', $var_1);
  } 




//BANERS HOME NO _3
   add_action('save_post', 'post_analitycs_banner_post_3');
  function post_analitycs_banner_post_3() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['analitycs_banner_post_3'];
  update_post_meta($post_id, 'analitycs_banner_post_3', $var_1);
  }


  add_action('save_post', 'post_imagen_banner_post_3');
  function post_imagen_banner_post_3() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['imagen_banner_post_3'];
  update_post_meta($post_id, 'imagen_banner_post_3', $var_1);
  }


  add_action('save_post', 'post_url_banner_post_3');
  function post_url_banner_post_3() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['url_banner_post_3'];
  update_post_meta($post_id, 'url_banner_post_3', $var_1);
  } 


  //BANERS HOME NO _4
   add_action('save_post', 'post_analitycs_banner_post_4');
  function post_analitycs_banner_post_4() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['analitycs_banner_post_4'];
  update_post_meta($post_id, 'analitycs_banner_post_4', $var_1);
  }


  add_action('save_post', 'post_imagen_banner_post_4');
  function post_imagen_banner_post_4() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['imagen_banner_post_4'];
  update_post_meta($post_id, 'imagen_banner_post_4', $var_1);
  }


  add_action('save_post', 'post_url_banner_post_4');
  function post_url_banner_post_4() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['url_banner_post_4'];
  update_post_meta($post_id, 'url_banner_post_4', $var_1);
  } 


//BANERS HOME NO _5
   add_action('save_post', 'post_analitycs_banner_post_5');
  function post_analitycs_banner_post_5() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['analitycs_banner_post_5'];
  update_post_meta($post_id, 'analitycs_banner_post_5', $var_1);
  }


  add_action('save_post', 'post_imagen_banner_post_5');
  function post_imagen_banner_post_5() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['imagen_banner_post_5'];
  update_post_meta($post_id, 'imagen_banner_post_5', $var_1);
  }


  add_action('save_post', 'post_url_banner_post_5');
  function post_url_banner_post_5() {
  global $wpdb, $post;
  if (!$post_id) $post_id = $_POST['post_ID'];
  $var_1= $_POST['url_banner_post_5'];
  update_post_meta($post_id, 'url_banner_post_5', $var_1);
  } 




