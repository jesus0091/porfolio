$(window)
  .scroll(function () {
    var $window = $(window),
      $body = $("body"),
      $panel = $(".panel");

    var scroll = $window.scrollTop() + $window.height() / 3;

    $panel.each(function () {
      var $this = $(this);

      if (
        $this.position().top <= scroll &&
        $this.position().top + $this.height() > scroll
      ) {

        $body.removeClass(function (index, css) {
          return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
        });

        $body.addClass("color-" + $(this).data("color"));
      }
    });
  })
  .scroll();

const cursor = document.querySelector("#cursor"),
  anchor = document.querySelectorAll(".hover-this");

window.addEventListener("mousemove", (e) => {
  let x = e.pageX,
    y = e.pageY;

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
});

anchor.forEach((anc) => {
  anc.addEventListener("mouseover", () => {
    cursor.style.transform = "scale(9)";
    cursor.style.animationName = "borderAnim";
  });
  anc.addEventListener("mouseleave", () => {
    cursor.style.transform = "";
    cursor.style.animationName = "";
  });
});
