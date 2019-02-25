
$("document").ready(function($){

// navbar change background
    // var nav = $('#mainnav');
    // $(window).scroll(function () {
		
    //     if ($(this).scrollTop() > 0) {
    //         nav.addClass("sticky");
    //     } else {
    //         nav.removeClass("sticky");
    //     }
    //     });
   
    // scroll top 
	var scrollBtn = $(".scroll-up");
	$(window).scroll(function () {
			if ($(this).scrollTop()>=100)
			{
				scrollBtn.show();
			}
			else{
                scrollBtn.hide();
            }             
		});
		scrollBtn.click(function () {
			$("html, body").animate({scrollTop: 0}, 600);
			return false;
			});


// 			var $p = $('.member-info .more__info');
// var divh = $('.member-info').height();
// while ($p.outerHeight() > divh) {
//     $p.text(function (index, text) {
//         return text.replace(/\W*\s(\S)*$/, '...');
//     });
// }

 }); //end ready function

//  alert(navigator.userAgent);
// if ((this.navigator.userAgent) == "Mozilla") {


// var $p = $('.member-info .more__info');
// var divh = $('.member-info').height();
// while ($p.outerHeight() > divh) {
//     $p.text(function (index, text) {
//         return text.replace(/\W*\s(\S)*$/, '...');
//     });
// }
// }



