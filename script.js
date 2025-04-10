
let progress = 10;
document.addEventListener("click", function () {
  progress += 10;
  if (progress > 100) progress = 100;
  document.getElementById("progress-bar").style.width = progress + "%";
});
