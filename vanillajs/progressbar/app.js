(function(){
    "use strict";
    // rest of the app codes

    /**-----------------------*
     * Skill-Bar module 
     * Author : mahabubdev
     *-----------------------*/

    function Skillbars(_host){
        this.host = document.querySelector(_host.rootElement);
        this.makeSkillBars = function () {
            let chArr = this.host.children;
            
            for (let _i=0; _i < chArr.length; _i++) {
                // console.log(chArr[_i].dataset.skill);
                //add images
                let skillImg = document.createElement('div');
                skillImg.classList.add('skill-img');
                let imgTag = document.createElement('img');
                imgTag.src = chArr[_i].dataset.img;
                imgTag.alt = chArr[_i].dataset.skill;
                skillImg.appendChild(imgTag);
                chArr[_i].appendChild(skillImg);

                //add txts & bars
                let skillInfo = document.createElement('div');
                skillInfo.classList.add('skill-info');
                let h4 = document.createElement('h4');
                h4.innerText = chArr[_i].dataset.skill;
                let skillBar = document.createElement('div');
                skillBar.classList.add('skill-bar');
                let bar = document.createElement('span')
                bar.classList.add('bar');
                let percentBar = document.createElement('span');
                percentBar.classList.add('percent');
                percentBar.style.width=`${chArr[_i].dataset.percent}%`;
                let txt = document.createElement('span');
                txt.classList.add('txt');
                txt.innerText = chArr[_i].dataset.percent + "%";

                // assign as tree
                bar.appendChild(percentBar);
                skillBar.appendChild(bar);
                skillBar.appendChild(txt);
                skillInfo.appendChild(h4);
                skillInfo.appendChild(skillBar);
                chArr[_i].appendChild(skillImg);
                chArr[_i].appendChild(skillInfo);
            }
        };

        this.makeSkillBars(); //called
    }

    // make an instance
    new Skillbars({ rootElement: '.wrapper' }); // bypass as querySelector

    //console msg
    const consoleMsg = `
        Your Data : ${window.navigator.userAgent} \n
    `;
    console.log(consoleMsg);

})();