<!-- Para Banner No. 2 -->
<div class="ContenedorDatos ContenedorBanner_7">
  <h1>Banner No.7 | Tamaño recomendado: 320px por 100px </h1><br>
  <div class="closebtnPopup"></div> 

  <!-- GOOGLE ANALITYCS -->
  <div style="display: none;">
  <div class="titulosBanners">1.- Código para Google Analitycs </div>
  <textarea  name="analitycs_banner_home_7" id="analitycs_banner_home_7" rows="5" cols="50"> 
     <?php echo $analitycs_banner_home_7; ?>
  </textarea><br><br>
</div>


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
             
                
                if ($imagen_banner_7 != '') {?> 
                   <img class="banner_class_7" src="<?php echo $imagen_banner_7 ?>"  width="728" height="90" style="cursor:pointer;"/>
                <?php }


                else { ?>
                    <img class="banner_class_7" src="<?php echo get_template_directory_uri();?>/options/images/defaultlogo.png"  width="228" height="110"  style="cursor:pointer;"/>  
               <?php } ?> 

                <!--Banner URL -->
                 <div class="titulosBanners">URL del Banner</div>
                 <p>Introduce la URL a dónde redireccionará el banner</p>
                 <input type="text" class="url_class_banner_home_7" id="url_banner_home_7" name="url_banner_home_7" size="80" value="<?php echo $url_banner_home_7; ?>"> <br>


                  <br />
                  <input class="banner_class_url_7" id="imagen_banner_7"  type="text" name="imagen_banner_7" size="30" value="<?php echo $imagen_banner_7; ?>" style="display:none">
                 <button onclick="Function_banner_7()"  class="button-primary">Borrar Imagen</button> <br><br>
                 <center>
                    <button class="button-primary button-aceptar">Guardar cambios</button>
                 </center>
            </p> 

            <hr>
            <script>
                jQuery(document).ready(function($) {
                    $('.banner_class_7').click(function(e) {
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
                            $('.imagen_banner_7').attr('src', attachment.url);
                            $('.banner_class_url_7').val(attachment.url);
                        })
                        .open();
                    });
                });

                function Function_banner_7() { 
                  document.getElementById("imagen_banner_7").value = "";    
                  document.getElementById("url_banner_home_7").value = "";    
                }
                
            </script>


</div><!-- ContenedorDatos -->
