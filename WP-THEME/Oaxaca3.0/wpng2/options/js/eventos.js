 

 
$(".closebtnPopup, .button-aceptar").click(function(){
	$(".Bloque_popup").fadeOut();
	$(".Bloque_popupPost").fadeOut();
	$(".ContenedorBanner_1").hide();		 
	$(".ContenedorBanner_2").hide();		 
	$(".ContenedorBanner_3").hide();		 
	$(".ContenedorBanner_4").hide();		 
	$(".ContenedorBanner_5").hide();		 
	$(".ContenedorBanner_6").hide();		 
	$(".ContenedorBanner_7").hide();		 
	$(".ContenedorBanner_8").hide();		 
	$(".ContenedorBanner_9").hide();		 
	$(".ContenedorBanner_10").hide();		 
	$(".ContenedorBanner_11").hide();	


	$(".ContenedorBannerPost_1").hide();	
	$(".ContenedorBannerPost_2").hide();	
	$(".ContenedorBannerPost_3").hide();	
	$(".ContenedorBannerPost_4").hide();	
	$(".ContenedorBannerPost_5").hide();	

});



$(".openBanner_1").click(function(){
	$(".Bloque_popup").fadeIn();
	$(".ContenedorBanner_1").fadeIn();	
});


$(".openBanner_2").click(function(){
	$(".Bloque_popup").fadeIn();
	$(".ContenedorBanner_2").fadeIn();	
});

$(".openBanner_3").click(function(){
	$(".Bloque_popup").fadeIn();
	$(".ContenedorBanner_3").fadeIn();	
});

$(".openBanner_4").click(function(){
	$(".Bloque_popup").fadeIn();
	$(".ContenedorBanner_4").fadeIn();	
});

$(".openBanner_5").click(function(){
	$(".Bloque_popup").fadeIn();
	$(".ContenedorBanner_5").fadeIn();	
});

$(".openBanner_6").click(function(){
	$(".Bloque_popup").fadeIn();
	$(".ContenedorBanner_6").fadeIn();	
});

$(".openBanner_7").click(function(){
	$(".Bloque_popup").fadeIn();
	$(".ContenedorBanner_7").fadeIn();	
});

$(".openBanner_8").click(function(){
	$(".Bloque_popup").fadeIn();
	$(".ContenedorBanner_8").fadeIn();	
});

$(".openBanner_9").click(function(){
	$(".Bloque_popup").fadeIn();
	$(".ContenedorBanner_9").fadeIn();	
});


$(".openBanner_10").click(function(){
	$(".Bloque_popup").fadeIn();
	$(".ContenedorBanner_10").fadeIn();	
});


$(".openBanner_11").click(function(){
	$(".Bloque_popup").fadeIn();
	$(".ContenedorBanner_11").fadeIn();	
});



//BANNERS PARA POST ==============================
$(".openBannerPost_1").click(function(){
	$(".Bloque_popupPost").fadeIn();
	$(".ContenedorBannerPost_1").fadeIn();	
});

$(".openBannerPost_2").click(function(){
	$(".Bloque_popupPost").fadeIn();
	$(".ContenedorBannerPost_2").fadeIn();	
});


$(".openBannerPost_3").click(function(){
	$(".Bloque_popupPost").fadeIn();
	$(".ContenedorBannerPost_3").fadeIn();	
});

$(".openBannerPost_4").click(function(){
	$(".Bloque_popupPost").fadeIn();
	$(".ContenedorBannerPost_4").fadeIn();	
});

$(".openBannerPost_5").click(function(){
	$(".Bloque_popupPost").fadeIn();
	$(".ContenedorBannerPost_5").fadeIn();	
});


//$("#category").on("change", toggleFields);

$( "#tipoBanner").change(function() {
  	if ($("#tipoBanner").val() == "opcion_1") {
  		$(".BloqueMain").fadeIn();
  		$(".BloqueMainPost").hide();
  	}

  	if ($("#tipoBanner").val() == "opcion_2") {
  		$(".BloqueMainPost").fadeIn();	
  		$(".BloqueMain").hide();

  	}
});


 

 