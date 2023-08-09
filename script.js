const toggleBtn = document.querySelector(".sidebar-togglebtn");
const closeBtn = document.querySelector(".closing-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebar.classList.toggle("show-sidebar");
  // toggleBtn.classList.toggle('active');
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});