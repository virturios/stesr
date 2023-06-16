

window.addEventListener('load', function () {


    
    var d = new Date();
    
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
    
     


    

   

    function convertDate(e) {
      var t,
          o = new Date(e);
      return [((t = o.getDate()), t < 10 ? "0" + t : t)].join("/");
  }

    function getMesExtenso(e) {
      var t = new Array(12);
      return (
          (t[0] = "janeiro"),
          (t[1] = "fevereiro"),
          (t[2] = "março"),
          (t[3] = "abril"),
          (t[4] = "maio"),
          (t[5] = "junho"),
          (t[6] = "julho"),
          (t[7] = "agosto"),
          (t[8] = "setembro"),
          (t[9] = "outubro"),
          (t[10] = "novembro"),
          (t[11] = "dezembro"),
          t[e]
      );
  }



   
})
