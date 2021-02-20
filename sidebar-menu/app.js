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
        nav_links.forEach(ll => ll.classList.toggle('link-block'))
    });
 };
 
 showNavbar('toggle', 'navbar', 'bdy-wrapper', 'header');


 /*=== Link active ===*/
 const nav_links = document.querySelectorAll('.nav_link');
 function colorLink() {
     if (nav_links) {
         nav_links.forEach(l => l.classList.remove('active'))
         this.classList.add('active');
     }
 }
 nav_links.forEach(l => l.addEventListener('click', colorLink));





/*=== Sub-Menu ===*/
const hasMenu = document.querySelectorAll('.has_drop');
function subMenu() {
    if (hasMenu) {
        hasMenu.forEach(hm => {
            const chevron_down = document.createElement('span');
            chevron_down.classList.add('lni');
            chevron_down.classList.add('lni-chevron-down');
            hm.appendChild(chevron_down);
        });
    }
}
subMenu();  //called




 /*=== END ===*/