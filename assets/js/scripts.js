$(function () {
  let FullScreenWidth = $(document).width();
  let pageNumber = 3;
  let nextPage = 1;
  let cont = 0;
  let personagem = "";

  $(".nextPagebtn").click(function (e) {
    e.preventDefault();

    if ($(this).data("personagem") != null) {
      personagem = $(this).data("personagem");
      $("#PageConteudo-3 #PalcoMontagemCorpo").addClass(personagem);
      $("#PageConteudo-3 #PalcoPecasCorpo").addClass(personagem);
      $("#PageConteudo-4 #PalcoMontagemCorpo").addClass(personagem);
    }

    $("#wrap-content").css("left", -FullScreenWidth * nextPage);
    nextPage++;
  });

  $("#pecaCorpo01").draggable();
  $("#pecaCorpo02").draggable();
  $("#pecaCorpo03").draggable();
  $("#pecaCorpo04").draggable();
  $("#pecaCorpo05").draggable();
  $("#silaba1").draggable();
  $("#silaba2").draggable();
  $("#silaba3").draggable();
  $("#silaba4").draggable();
  $("#silaba5").draggable();
  $("#silaba6").draggable();
  $("#silaba7").draggable();
  $("#silaba8").draggable();
  $("#silaba9").draggable();

  $(".drop").droppable({
    drop: function (event, ui) {
      if ($(this).data("rel") == ui.draggable[0].id) {
        $(this).addClass("OK");
        $(ui.draggable).addClass("OK");
        cont++;
        if (cont == 5 || cont == 14) {
          $("#PageConteudo-" + nextPage + " #PalcoPecasCorpo").remove(".row");
          $("#pop-up-" + nextPage).addClass(
            "next"
          );
        }
      }
    },
  });
});
