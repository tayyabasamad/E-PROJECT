document.getElementById("mobile-menu").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});
//  Simple animation for social icons on hover
document.querySelectorAll('.footer-social a').forEach(icon => {
    icon.addEventListener('mouseover', function () {
      this.style.transform = 'scale(1.3)';
    });
    icon.addEventListener('mouseout', function () {
      this.style.transform = 'scale(1)';
    });
  });