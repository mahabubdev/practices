/**======================================================*
 * Name:    mSlider
 * Version: 1.0
 * Author:  mahabubdev
 *======================================================*/

function mSilder ({
    containerElement = '.container',
    containerHeight = '600px',
    sliderItemClass = 'mslider-slide',
    navigateIndigatorClass = 'mslider-nav',
    navController = {
        next: `<span><span class="bx bx-chevron-right ${navigateIndigatorClass}"></span></span>`,
        prev: `<span><span class="bx bx-chevron-left ${navigateIndigatorClass}"></span></span>`,
    },
    navIndicator = `<span class="mslider-indicator"></span>`,
    autoplay = {
        status: false,  // by default: False
        duration: 5000, // by default: 5000ms = 5s;
    },
    overlay = {
        status: false,
        bgColor: 'rgba(0,0,0,0.125)',
        zIndex: '-1',
        // document: null  // pass your custom overlay html-element
    },
}) {
    // constructor
    this._container = document.querySelector(containerElement);// by default: '.container' class (using querySelector)
    this._sliders = this._container.children; // array of root element : [=> slider-items <=]
    this._containerHeight = containerHeight; // by default: it is 600px; can change as css-height value
    this._navController = navController; // by default: using box-icons@css-font https://boxicons.com/
    this._sliderClass = sliderItemClass; // by default: plugin-nav-item css selector
    this._indicator = navIndicator; // by default: this element will be rendered as indicator
    this._autoplay = autoplay; // by default: off
    this._overlay = overlay;    // by default :: overlay is off
    this._sliderIndex = 0; // by default: 0 & can't be change in obj ins.


    /*--- pre-setup ---*/
    this._container.style = `
        position: relative;
        overflow: hidden;
        min-height: ${this._containerHeight};
    `;  // container element minimum css

    

    // assign mslider-slide class to all items
    for(var sld=0; sld<this._sliders.length; sld++) {
        this._sliders[sld].classList.add(this._sliderClass);
        this._sliders[sld].classList.add('mslider-item'); 
        this._sliders[sld].classList.add('animate__animated');
        this._sliders[sld].classList.add('animate__slideInRight');

        this._sliders[sld].style = `
            background-image: url('${this._sliders[sld].dataset.bgimg}');
            z-index: -1;
        `;


        // if overlay === True
        if (this._overlay.status === true) {
            let sliderOverlay = document.createElement('div');
            sliderOverlay.classList.add('mslider-overlay');
            sliderOverlay.style = `
                background-color: ${this._overlay.bgColor};
                z-index: ${this._overlay.zIndex};
            `;
            this._sliders[sld].appendChild(sliderOverlay);
        }
    }


    // assign nav-controls
    let navControllerEl = document.createElement('div');
    navControllerEl.classList.add('mslider-navs');
    navControllerEl.style = `
        z-index: 1;
    `;
    navControllerEl.innerHTML = `
        ${this._navController.prev}
        ${this._navController.next}
    `;
    this._container.appendChild(navControllerEl);

    /*--- pre-setup ---*/






    // handle the slider
    this._handleSlider = function () {
        //
    };

    // handle next


    // handle prev


    // handle reset


    // handle indicator


    // operations
    this._handleSlider();
}