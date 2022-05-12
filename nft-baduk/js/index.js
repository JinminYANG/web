/*  nav click event */
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll('.header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        // console.log('top: ' + top);
        let offset = sec.offsetTop;
        // console.log('offsetTop : ' + offset);
        let height = sec.offsetHeight;
        // console.log('height: ' + height);
        let id = sec.getAttribute('id');

        if (top + 1 >= offset && top + 1 < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
});