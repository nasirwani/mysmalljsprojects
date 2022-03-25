/** @format */

const openicon = document.getElementById("open");
const closeicon = document.getElementsByClassName("close");
const mylist = document.getElementsByClassName("item");
const info = document.getElementById("myinfo");
for (let i = 0; i < mylist.length; i++) {
  mylist[i].addEventListener("click", () => {
    mylist[i].classList.toggle("active");
  });
}
