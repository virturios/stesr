

window.addEventListener('load', function () {
    $(".headerdesconto").fadeTo(2000,1);

    
    x = $("#vimeoplayer").attr("data-id");
    $("#vimeoplayer").attr("src","https://player.vimeo.com/video/"+x);

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



    jQuery(document).ready(function (e) {
      var t = new Date();
        g = t.setDate(t.getDate());
        o = t.setDate(t.getDate() - 15);
        n = t.setDate(t.getDate() + 10 + 15);
        r = getMesExtenso(t.getMonth());
        var dataarrumada = convertDate(new Date()) + " de " + r;
        if (convertDate(o) > convertDate(n)) var a = "<strong>" + convertDate(n) + "</strong> e <strong>" + convertDate(o) + " de " + r + "</strong>";
        else {
            if (null == (s = getMesExtenso(t.getMonth() + 1))) var s = getMesExtenso(t.getMonth() - 11);
            a = "<strong>" + convertDate(n) + " de " + r + "</strong> e <strong>" + convertDate(o) + " de " + s + "</strong>";
        }
      e.getJSON("https://wtfismyip.com/json", function (t) {
          var o = (t = t.YourFuckingLocation).replace(", Brazil", "");
          var posicao = o.indexOf(",");
          var tratado = o.substring(0, posicao);
          e(".custom-address").html("<font color='#00A650'>via <b>Correios</b></font> <font color='#00A650'> para </font> <strong><font color='#00A650'>" + o + " e Região</font></strong>"),
        e(".shipping-estimated").html("<font color='#00A650'>Chegará grátis entre " + a + ".</font>"),
        e(".shipping-estimated2").html("<font color='#00A650'>Chegará <b>grátis</b> entre " + a + ".</font>"),

        e(".shipping-preview-loading").addClass("d-none"),
          e(".cidade").html(tratado),
              e(".cidaderegiao1").html(o),
              e(".cidaderegiao").html(o + " e região");  
             
      });
  });

})
