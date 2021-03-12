/**======================================*
 * Javascript
 *======================================*/


 // modules
 var generateID = function () {
    return Math.random(1000,9999).toString(16).substr(2);
};

 // states
 let state = [
    //  {
    //      id: generateID(),
    //      file: 'data:base64://akwefwir3rf4njherfhj',
    //      fileType: 'img'
    //  }
 ];



 // vars
 const fileInp = document.getElementById('inp_file');
 const visual = document.getElementById('visual');



 // make with OOP
 class fileListing {
    constructor (dataURL, fileType='img') {
       this.dataURL = dataURL;
       this.fileType = fileType;
       this.fileID = generateID();
    }

    // assign
    addFile() {

       var newFile = {
           id: this.fileID,
           file: this.dataURL,
           fileType : this.fileType
       };

        state.push(newFile);

        return newFile;
    }

    // remove
    delFile(ctx) {
       state.splice(state.findIndex(f => f.id === ctx), 1);
    }
}


fileInp.onchange = function(event) {
    var inpFile = event.target;
    var fread = new FileReader();

    fread.onload = function () {
        let dataURL = fread.result;
        console.log(fread);
    }

    fread.readAsArrayBuffer(inpFile.files);
}

//  fileInp.onchange = function (event) {
//      var inpFile = event.target;

//      var fread = new FileReader();

//      fread.onload = function () {
//          var dataURL = fread.result;
//          console.log(fread);
//          // output
//          var imgVis = document.createElement('img');
//          imgVis.src = dataURL;
//          visual.appendChild(imgVis);
//      };

//      fread.readAsDataURL(inpFile.files[0]);
//  };



 



/*=== END ===*/