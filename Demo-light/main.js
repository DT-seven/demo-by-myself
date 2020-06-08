$(document).ready(function () {
  let $box = $(".box");
  let div = document.createElement("div");
  div.className = "light";
  $box.append(div);

  let $light = $(".light");
  $light.each(function () {
    let thisLight = $(this);
    let a = Math.random() * 50;
    thisLight.css({
      width: a + "px",
      height: a + "px",
      top: Math.random() * 100 + "vh",
      left: Math.random() * 1000 + "vh",
      background:
        "rgba(" +
        Math.random() * 225 +
        "," +
        Math.random() * 225 +
        "," +
        Math.random() * 225 +
        "," +
        Math.random() * 1 +
        ")",
      boxShadow:
        "0 0 " +
        Math.random() * 100 +
        "px rgba(" +
        Math.random() * 225 +
        "," +
        Math.random() * 225 +
        "," +
        Math.random() * 225 +
        "," +
        Math.random() * 1 +
        ")",
    });
  });
  let light = document.getElementsByClassName("light");
  let box = document.getElementsByClassName("box");
  let w = 0;
  let timer = setInterval(function () {
    light[w].style.animation = "moveX 6s linear infinite";
    box[w].style.animation = "moveY 30s linear infinite";
    w++;
    if (w >= box.length) {
      clearInterval(timer);
    }
  }, 10);
});
