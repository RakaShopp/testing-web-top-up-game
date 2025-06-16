
function hideLoader() {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.querySelector("main").style.display = "block";
  }, 1000);
}
