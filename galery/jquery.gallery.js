(function($, undefined){
	function step(direct,shag,speed,easing){
		var marginLeft = parseInt($carusel.css('marginLeft'));// ������� ��������� ��������
		var wdth = caruselWidth() - galleryWidth; // ������������ ��������� �����
		if( direct > 0 ){
			// ��������� �����
			// ���� ������� ��������� + shag �� ��������� ����������� ����������
			if( wdth >= Math.abs(marginLeft)+shag ){
				// �� ������ ������������ �� shag
				$carusel.stop().animate({'marginLeft':'-='+shag+'px'},speed,easing)
			// ����� ����������� �� ����, � ���
			}else $carusel.stop().animate({'marginLeft':'-'+wdth+'px'},speed,easing)
		}else{
			// ���������� ��� ��������� ������, �� ��� ������ �� ����
			if( 0 <= Math.abs(marginLeft)-shag ){
				$carusel.stop().animate({'marginLeft':'+='+shag+'px'},speed,easing)
			}else $carusel.stop().animate({'marginLeft':'0px'},speed,easing)
		}
	}
	
	var caruselWidth = function(){
		var w = 0;
		$items.each(function(){
			w+=$(this).find('img').width()+5;
		})
		return w;
	}
	
	$('.display, .close').on("click", function(e) {
    
    $('.display')
        .fadeOut();

    $('.bigImg')
        .fadeOut();

});
	
	$('.photo').on("click", function(e) {
    $('.display')
        .show()
        .css('opacity', 0)
        .animate({
            'opacity': '0.7'
        }, 'slow');

    $('.bigImg')
        .show(700);

    var addr = e.target.src;
    $('.loader').css('display','block');
    $('.bImg').attr('src', addr);
    $('.bImg').load(function (){
        $('.loader').css('display','none');
    });


});
	
	var galleryWidth = 0; // ������ ����� ��������
	var shag = 700; // ��� ������ ���� ����� ������� �������� �� 100 ������
	var speed = 200; // ����� � �������������, �� ������� ������� ������� 1 ���, �.�. ��������� �� shag ��� 200px
	var $gallery  = 0; // ��������������� ����������, ��� ����������, ����� �� ����� ������ ������
	var $carusel = 0; // ������� ��� �������� ������� ��������, � ����� ������������ ������ �� ����
	var $items = 0;
	$(document).ready(function(){
		// ��������� ������� ���� ������ ����� ����, ��� DOM ��������� ��������
		$gallery = $('.gallery'); // ������� ���� �������
		$carusel = $gallery.find('.carusel');// ������� � ��� ��������
		$items = $carusel.find('a');
		galleryWidth = $gallery.width()
		$gallery.find('div.next,div.prev')
		.hover(function(){
			$(this).stop().animate({'opacity':'0.8'},400);
			},function(){
			$(this).stop().animate({'opacity':'0.5'},400);
			})
			.click(function(){
			step(this.className=='next'?1:-1,shag,speed,'linear');
		})
		
		
	})
	
	
})(jQuery);