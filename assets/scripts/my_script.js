//loading image

$(document).ready(function(){
	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});

	$(".top_container").hide().fadeIn(3000)

	$(".navbar a,.form-group").animate({top:0},2000);

	$(".facebook a").mouseover(function(){
		$(this).animate({left : 10,})
	})

	$(".facebook a").mouseout(function(){
		$(this).animate({left : 5})
	})

	$('#backtotop').localScroll({
			duration:800
		});

	$(".table_data tr:even").css("background-color","#FFE4C4");
	$(".table_data tr:odd").css("background-color","#D3D3D3");
	$(".table_data tr:first").css({"background-color":"#001a57","color":"#ffffff"});
	$(".table_data2 tr:first").css({"background-color":"#001a57","color":"#ffffff"});

});

jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 250) {
        $("#backtotop").fadeIn(1000);
    } else {
        $("#backtotop").fadeOut(1000);;
    };

   

});


function validate_form(){
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;

	if ( name === "" || name === null) {
		$(window).ready(function(){
			$(".required1").html("*Name is required");
		});
		return false;
	}else{
		$(".required1").html("");
	}

	if ( name.length < 0 || name.length < 3) {
		$(window).ready(function(){
			$(".required1").html("*Min 3 charactors");
		});
		return false;
	}else{
		$(".required1").html("");
	}

	if ( email === "" || email === null) {
		$(window).ready(function(){
			$(".required2").html("*Email is required");
		});
		return false;
	}else{
		$(".required2").html("");
	}


}  