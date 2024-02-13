// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika humburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hm = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

let on_off = document.querySelector(".container .slider");
let audio = document.querySelector(".musicOn audio");

on_off.onclick = function () {
  audio.paused ? audio.play() : audio.pause();
};

document.addEventListener('DOMContentLoaded', function() {
  var video = document.getElementById('video');

  // Menambahkan event listener untuk mendeteksi saat video selesai diputar
  video.addEventListener('ended', function() {
      // Mengubah display menjadi 'none' setelah video selesai diputar
      var transitionElement = document.querySelector('.video-transition');
      if (transitionElement) {
          transitionElement.style.display = 'none';
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    // Mengunci pengguliran halaman saat dimuat
    document.body.style.overflow = 'hidden';

    // Memilih elemen dengan kelas 'cta' atau ID 'click'
    var ctaElements = document.querySelectorAll('.cta, click');

    // Menambahkan event listener ke setiap elemen cta
    ctaElements.forEach(function(ctaElement) {
        ctaElement.addEventListener('click', function() {
            // Mengubah properti overflow menjadi '' (kosong) saat tombol "cta" diklik
            document.body.style.overflow = '';
        });
    });
});

