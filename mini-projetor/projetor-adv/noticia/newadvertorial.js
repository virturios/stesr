






window.addEventListener('load', function () {


   


   $(".texto-comentario").each(function () {
      $(this).after('<div class="botoes-comentario"><svg class="icon icon-thumbs-up mr-1"><use xlink:href="#icon-thumbs-up"></use></svg><span class="font-opens" style="font-size: 13px; font-weight: bold; margin-right: 20px;">Curtir</span><a class="botao-compartilhar" style="color: #212529;vertical-align: middle;display: flex;align-items: flex-end;"href="" target="_blank"><svg class="icon icon-undo2 mr-1"><use xlink:href="#icon-undo2"></use></svg><span class="font-opens"style="font-size: 13px; font-weight: bold; margin-right: 20px;">Compartilhar</span></a></div>');
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

   $(".cliqueaqui,.cardofertafinal a").on('click tap', function (evt) {
      evt.preventDefault();
      x = $(this).attr("href");
      $("body").prepend('<div style="display:none" class="cupomcardpopup" id="demo"></div>');
      $('html, body').css({
         overflow: 'hidden',
      });
      $(".container").fadeTo(1000, 0.32);
      $("#demo").fadeIn(1000);
      $('#demo').jQMeter({
         goal: '$10,000',
         raised: '$10,000',
         width: '300px',
         counterSpeed: 5000,
         animationSpeed: 5000,
         barColor: "#bc0406",
      });
      setTimeout(function (e) {
         window.location = x;
      }, 6000);
   });


   
         e(".cidade").html(tratado),
            e(".todaydate").html(dataarrumada),
            e("#autoradv").html("Por G3 " + b),
            e(".estadosigla").html(b),
            e(".cidaderegiao1").html(o),
            e(".cidaderegiao").html(o + " e região"),
            e(".shipping-estimated").html("Receba seu pedido entre os dias " + a + ".");
      });
   });


   $(".icon-thumbs-up").on("click", function () {
      $(this).css('color', '#1178ee');
   });











})






