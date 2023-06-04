function toggleNav() {
  var navbar = document.getElementById("navbar");

  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
  } else {
    navbar.classList.add("active");
  }
}

  // function closeNav() {
  //   document.getElementById("navbar").classList.remove("active");
  // }
 

// const menuIcons = document.querySelectorAll('#menu-icons');
// const navbar = document.querySelectorAll('.navbar');

// menuIcons.onclick =()=>{
//     menuIcons.classList.toggle(' #menu-icons')
//     navbar.classList.toggle('active')
// }


// window.onscroll=()=>{
// sections.forEach(sec=>{
// let top=window.scrollY
// let offset=sec.offsetTop -150
// let height= sec.offsetHeight
// let id= sec.getAttribute('id')
// if(top >= offset && top < offset +height){
//     navLinks.classList.remove('active')
//     document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
// }




// })

// const header = document.querySelector('header');
// header.classList.toggle('sticky', window.scrollY > 100);

// }
// Initialize ScrollReveal
// Frontend Devloper!

document.addEventListener('DOMContentLoaded', function() {
  const sr = ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  });

  sr.reveal('.homecontent, .heading', { origin: 'top' });
  sr.reveal('.homeimg, .service-container,portfolio-box,.contact', { origin: 'bottom' });
  sr.reveal('.homecontent h1, .about-img', { origin: 'left' });
  sr.reveal('.homecontent p, .about-content', { origin: 'right' });
});
