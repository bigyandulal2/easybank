{
  /* <div class="navbar">
<div class="navbar_imgbox">
  <img src="./images/logo.svg" alt="logo" class="img" />
</div>
<ul class="navbar_items">
  <a href="#">Home</a>
  <a href="#"> About</a>
  <a href="#">Contact</a>
  <a href="#">Blog</a>
  <a href="#">Careers</a>
</ul>
<div class="btnbox">
  <div class="navbar_btn">Request Invite</div>
</div>
</div> */
}
const nav_btnbox = document.querySelector(".btnbox");
const nav_items = document.querySelector(".navbar_items");
const menu = document.querySelector(".menu");
const menu_close = document.querySelector(".menu_close");
const navbar_center = document.querySelector(".navbar_center");
menu.addEventListener("click", function () {
  navbar_center.style.display = "block";
  this.style.display = "none";
  menu_close.style.display = "inline-block";
});

menu_close.addEventListener("click", function () {
  navbar_center.style.display = "none";
  this.style.display = "none";
  menu.style.display = "inline-block";
});
