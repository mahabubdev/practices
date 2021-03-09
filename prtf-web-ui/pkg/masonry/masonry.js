/**=========================================*
 * Masonry | @mahabubdev
 * version: 1.0.0
 * Personal plugin | @vanillaJS
 * Open for everyone
 *=========================================*/

function Masonry({ rootElement, nav, initialTarget = 'web', animationType = ['animate__fadeInDown'] }) {
    /*---= constructor =---*/
    this._el = document.querySelector(rootElement); // host element
    this._msnNav = document.querySelector(nav);    // nav menu element
    this.initMsn = initialTarget;   // initial filtered data :: or give '*' for all-available
    this._animationType = animationType;    // card animations  ::=> by default I'm using animate-css-style https://animate.style/

    // check argument
    if ((typeof(arguments[0]) !== 'object') || (arguments.length >= 2)) {
        console.error('Invalid argument!');
    }

    // msn nav
    var rootEl = this._el;
    var msnAnimation = this._animationType;
    msnAnimation.push('animate__animated');
    

    // Navs functionality ...
    this._msnNavigators = function() {
        var msnNavs = this._msnNav.children;
        for (var _mn=0; _mn<msnNavs.length; _mn++) {
            // console.log(msnNavs[_mn].dataset.msn);
            msnNavs[_mn].addEventListener('click', function(){
                _msnAfterEvent(this.dataset.msn);
                // remove active-class from others
                for (var _rmv=0; _rmv<msnNavs.length; _rmv++) {
                    msnNavs[_rmv].classList.remove('msn_active');
                }
                // active class : msn_active
                this.classList.add('msn_active');
                
            });
        }
    };

    
    // after click event => change data
    var _msnAfterEvent = function(target_data = this.initMsn) {
        if (target_data === '*') {
            // it measns show all data
            // console.log("show all : ", target_data);
            for (var _msd=0; _msd<rootEl.children.length; _msd++) {
                var _currChild = rootEl.children[_msd];
                _currChild.style.transition = 'all .3s ease';
                // show all
                _currChild.style.visibility = 'visible';
                _currChild.style.opacity = 1;
                _currChild.style.display='flex';
                // loop animation classes
                for (var _manm=0; _manm<msnAnimation.length; _manm++) {
                    _currChild.classList.add(msnAnimation[_manm]);
                }
            }

        } else {
            for (var _msd=0; _msd<rootEl.children.length; _msd++) {
                var _currChild = rootEl.children[_msd];
                // console.log(_currChild.classList);
                _currChild.style.transition = 'all .3s ease';

                if (_currChild.classList.contains(target_data)){
                    // console.log("SHOW IT", _currChild);
                    _currChild.style.visibility = 'visible';
                    _currChild.style.opacity = 1;
                    _currChild.style.display='flex';
                    // loop animation classes
                    for (var _manm=0; _manm<msnAnimation.length; _manm++) {
                        _currChild.classList.add(msnAnimation[_manm]);
                    }
                } else {
                    // console.log("HIDE IT", _currChild);
                    _currChild.style.visibility = 'hidden';
                    _currChild.style.opacity = 0;
                    _currChild.style.display='none';
                    for (var _manm=0; _manm<msnAnimation.length; _manm++) {
                       if (_currChild.classList.contains(msnAnimation[_manm])) {
                            _currChild.classList.remove(msnAnimation[_manm]);
                       }
                    }
                }
            }
        }
    };





    // operations
    _msnAfterEvent(this.initMsn);
    this._msnNavigators(); // called
}