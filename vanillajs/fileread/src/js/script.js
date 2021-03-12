// dom elements
const fileInp = document.getElementById('inp_file');
const visual = document.getElementById('visual');
let filesState = [];

// handle onchange
fileInp.addEventListener('change', async function(e){
    // reset 
    await filesState.length === 0;
    // operation
    await convertToBase64(e.target);
    renderingFiles();
})

// render
const renderingFiles = () => {
    filesState.map(fl => {
        let img = document.createElement('img');
        img.src = window.atob(fl.base64);
        img.classList.add('preview');
        visual.appendChild(img);
    })
}


// function
const toBase64 = _file_ => new Promise((resolve, reject) => {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(_file_);
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.onerror = (error) => reject(error);
});

// working
async function convertToBase64(inputElement) {
    let allFiles = inputElement.files;
    for(let _f=0; _f<allFiles.length; _f++){
        // toBase64(allFiles[_f]);
        await toBase64(allFiles[_f])
        .then(base_data => {
            filesState.push({
                base64: base_data
            });
        })
    }
}