// js/nav.js
document.addEventListener("DOMContentLoaded", function(){
  const links = document.querySelectorAll(".nav-list a");
  const current = window.location.pathname.split("/").pop(); 
  // index.html일 때는 ""가 되므로 아래 처리를 추가
  const page = current === "" ? "index.html" : current;

  links.forEach(link => {
    const href = link.getAttribute("href");
    if(href === page) {
      link.classList.add("active");
    }
  });
});

