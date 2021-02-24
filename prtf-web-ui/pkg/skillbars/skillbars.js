/**=========================================*
 * Skillbars | @mahabubdev
 * version: 1.0.0
 * Personal plugin | @vanillaJS
 * Open for everyone
 *=========================================*/

 function Skillbars({ type = 'linear', rootElement }) {

     /*---= constructor =---*/
     this._el = document.querySelector(rootElement); // host element
     this._type = type; // bar types: 1. linear (default); 2. circile
     this._argImg;  // conditional
     

     /*---= conditional constructor =---*/
     // check arguments
     if ((typeof(arguments[0]) !== 'object') || (arguments.length >= 2)) {
        console.error('Error! You should pass only an object.');
     }

     if (typeof(arguments[0].options) === 'object') {
        if (arguments[0].options.img !== false || arguments[0].options.img !== undefined || arguments[0].options.img !== null) {
            this._argImg = true;
        } else { this._argImg = false; }
     } else {
         // set defalt options
         this._argImg = false;
     }

     
    //  console.log(this._argImg);


    



    // linear-bar
    this.linearBars = function() {
        var childElements = this._el.children;

        for (var _ch=0; _ch<childElements.length; _ch++) {
            // console.log(
            //     childElements[_ch].dataset.sk_name,
            //     childElements[_ch].dataset.sk_percent
            // );
            console.log(this._argImg);

            // conditional elements
            if (this._argImg === true) {
                var skImg = document.createElement('div');
                skImg.classList.add('sk_Img');
                var imgTag = document.createElement('img');
                imgTag.src = childElements[_ch].dataset.sk_img;
                imgTag.alt = childElements[_ch].dataset.sk_name;
                skImg.appendChild(imgTag);
                childElements[_ch].appendChild(skImg);
            }

            // add text & contents
            var skInfo = document.createElement('div');
            skInfo.classList.add('sk_info');
            var skName = document.createElement('h4');
            skName.innerText = childElements[_ch].dataset.sk_name;
            var skBar = document.createElement('div');
            skBar.classList.add('sk_bar');
            var bar = document.createElement('span');
            bar.classList.add('skbar');
            var skPer = document.createElement('span');
            skPer.classList.add('sk_percent');
            skPer.style.width = `${childElements[_ch].dataset.sk_percent}%`;
            var skTxt = document.createElement('span');
            skTxt.classList.add('sk_txt');
            skTxt.innerText = `${childElements[_ch].dataset.sk_percent}%`;

            // make the tree
            bar.appendChild(skPer);
            skBar.appendChild(bar);
            skBar.appendChild(skTxt);
            skInfo.appendChild(skName);
            skInfo.appendChild(skBar);
            childElements[_ch].classList.add('_skbar_');
            childElements[_ch].appendChild(skInfo);
        }
    }







    /*---=== operations ===---*/
    if (this._type === 'linear') {
        this.linearBars();
    } else if (this._type === 'circle') {
        console.log('<...workingOnIt...>');
    }

 }


 /*=== END ===*/