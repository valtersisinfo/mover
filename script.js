$(document).ready(function()
{
  let mover = false;
  let mouseX = null;
  let mouseY = null;
  let movido = null;
  let movidoOffset = null;
  let paiOffset = null;

  $("body").on("click mouseup touchend mouseleave", function(e)
  {
    mover = false;
  });

  $("body").on("mousedown", ".movedor", function(e)
  {
    mover = true;
    mouseX = e.clientX;
    mouseY = e.clientY;
    movido = $(this).parent(".movido");
    movidoOffset = movido.offset();
    paiOffset = movido.parent().offset();
  });


  // Ao mover o mouse com o mouse clicado no movedor
  $(document).on("mousemove", function(e)
  {
    if (mover)
    {
      movido.css("margin", 0);
      movido.css("left", (movidoOffset.left - paiOffset.left) + (e.clientX - mouseX));
      movido.css("top", (movidoOffset.top - paiOffset.top) + (e.clientY - mouseY));
    }
  });
});