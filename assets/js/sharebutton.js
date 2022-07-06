var share_btn = document.querySelector(".share_btn");
var toggle_button = document.querySelector(".toggle_button");

share_btn.addEventListener("click", function(){
  toggle_button.classList.toggle("active");
})