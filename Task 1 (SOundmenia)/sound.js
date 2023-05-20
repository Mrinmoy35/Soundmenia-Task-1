$(document).ready(function() {
    $(".fa-search").click(function() {
        $(".icon").toggleClass("active");
        $("input[type='text']").toggleClass("active");
    });
});

const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});