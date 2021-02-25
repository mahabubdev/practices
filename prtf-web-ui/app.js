(function(){
    "use strict";
    // all codes starts from here

    // some global elements
    var navMenus = document.getElementById('navbar');
    var navToggle = document.getElementById('toggle');
    

    function main() {
        // register all modules
        // console.log("Javascript initiated...!");

        // handle nav-menus
        handleNavs();

        // test-prototype
        
    };


    /**==============================*
     * Page Loading
     *==============================*/


    /**==============================*
     * responsive nav menus handle
     *==============================*/
    function handleNavs() {

        navToggle.addEventListener('click', function(){
            navMenus.classList.toggle('nav-sidebar');
        });

        var navCloseBtn = document.getElementById('toggle-cross');
        navCloseBtn.addEventListener('click', function(){
            if (navMenus.classList.contains('nav-sidebar')){
                navMenus.classList.remove('nav-sidebar');
            }
        });

        // on window resize
        window.addEventListener('resize', function() {
            let test = window.matchMedia('(max-width: 1198.99px)');
            if (test.matches === false) {
                // remove nav-sidebar styles
                if (navMenus.classList.contains('nav-sidebar')){
                    navMenus.classList.remove('nav-sidebar');
                }
                
            }
        });
    }


    /**==============================*
     * Skillsbar
     *==============================*/
    new Skillbars({
        rootElement: '.skill_bars',  // you can pass custom selector like. #skillbars or .myskills_bar etc.
        // type: 'linear',             // default : linear | ['linear', 'circle']
        options : {
            img: true,          // default: false; make sure `attribute` data-img='src' in .skill_bar elements
        }
    });


    // new Skillbars({});



    /**==============================*
     * Masonry
     *==============================*/
    


    /**==============================*
     * Page Loading
     *==============================*/


    main(); // called all in main()

})();