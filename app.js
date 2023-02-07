
// Menu
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-100%";
}





// Object animation 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } 

    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));





// Text animation
var textWrapper = document.querySelector('.ml16');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml16 .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 30 * i
  })
  .add({
    targets: '.ml16',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 5000
  });