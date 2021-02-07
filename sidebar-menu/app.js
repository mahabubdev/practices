/**==========================================*
 * JavaScripting
 *==========================================*/

 console.log('Javascript is working');

 // show navbar
 var showNavbar = (togId, navId, bdyId, hId) => {
     var tog = document.getElementById(togId);
     var nav = document.getElementById(navId);
     var bdyWrap = document.getElementById(bdyId);
     var header = document.getElementById(hId);

     // toggle classes
     tog.addEventListener('click', () => {
        console.log('toggled');
        nav.classList.toggle('show');
        tog.classList.toggle('lni-menu');
        tog.classList.toggle('lni-close');
        bdyWrap.classList.toggle('bdy-pd');
        header.classList.toggle('bdy-pd');
    });
 };

 showNavbar('toggle', 'navbar', 'bdy-wrapper', 'header');


 /*=== Link active ===*/
 const linkColor = document.querySelectorAll('.nav_link');
 function colorLink() {
     if (linkColor) {
         linkColor.forEach(l => l.classList.remove('active'))
         this.classList.add('active');
     }
 }
 linkColor.forEach(l => l.addEventListener('click', colorLink));

 /*=== END ===*/