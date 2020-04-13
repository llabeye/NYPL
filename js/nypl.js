$(document).ready(function () {
  $(".sidescreen").click(function () {
    $(".bodyodyody").toggleClass("move");
  });
  $(".draggable").draggable({
    containment: ".frontscreen",
  });
  $(".rightwindow").tilt({ scale: 1.2 });
  $("div.rightwindow").click(function () {
    $("img.img").attr("src", "./assets/img2.jpeg");
  });
  $(".leftwindow").tilt({ scale: 1.2 });
  $("div.leftwindow").click(function () {
    $("img.img").attr("src", "./assets/img3.jpeg");
  });
  $("div.bottombar").click(function () {
    $("img.img").attr("src", "./assets/img1.jpeg");
  });
  //mediaplayer
  $(".play").click(function () {
    var $this = $(this);
    $this.toggleClass("active");
    if ($this.hasClass("active")) {
      $("#music").trigger("play");
    } else {
      $("#music").trigger("pause");
    }
  });
  //canvas functioning from here on
  window.onload = () => {
    const d = document;
    var canvas = d.getElementById("canvas");
    var c = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var meta = {
      draw: false,
      size: 5,
    };

    canvas.onmousedown = (e) => {
      meta.draw = true;
      c.moveTo(e.clientX, e.clientY);
      if (meta.draw) {
        canvas.onmousemove = (e) => {
          c.lineTo(e.clientX, e.clientY);
          c.stroke();
        };
      } else if (!meta.draw) {
        canvas.onmousemove = (e) => {};
      }
    };

    canvas.onmouseup = (e) => {
      meta.draw = false;
      if (!meta.draw) {
        canvas.onmousemove = (e) => {};
      }
    };
  };
});
