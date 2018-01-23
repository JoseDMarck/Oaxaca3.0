<?php 

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

