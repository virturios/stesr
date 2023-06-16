

window.addEventListener('load', function () {
 
    
    $( ".data-coment" ).each(function( index ) {
        $( this ).html((d.toLocaleDateString("pt-BR")));
        if (index%2 != 0){
        d.setDate(d.getDate() - 1)
    }
      });
    
      $( "#commentform" ).submit(function( evt ) {
        
        evt.preventDefault();
        $("#escrevercomment").fadeOut(2000);
        $("#comentario2").text($("#comentario").val())
        $("#nome2").text($("#nome").val())
        $("#data2").text(new Date().toLocaleDateString("pt-BR"))
        $("#reviewrate2").attr("src","/img/"+$( "input:checked" ).val()+"estrelas.svg");
        $('html,body').animate({scrollTop: ($("#clientreview").offset().top)-100},'slow');
        $("#commentfak").fadeIn(4000); 
        $("#totalreview").text("(298 avaliações)");
        
      });

    var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
  
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });





  

})
