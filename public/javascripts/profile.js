// const upload = require("../../routes/multer");

emptyMessage = document.querySelector('.empty-message');
createPinBtn = document.querySelector('.create-pin-btn');
uploadCancelBtn = document.querySelector('.upload-cancel-btn');
const uploadForm = document.querySelector('.upload-form');
const createBtn = document.getElementById("create-btn");
const savedBtn = document.getElementById("saved-btn")

createPinBtn.addEventListener('click', function() {
    console.log('Create Pin button clicked');

    createPinBtn.style.display = 'none';

    
    uploadForm.style.display = 'flex';
})
uploadCancelBtn.addEventListener('click', function() {
    console.log('Upload Cancel button clicked');


    uploadForm.style.display = 'none';

    createPinBtn.style.display = 'block';
});


createBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    savedBtn.classList.remove("active");
    createBtn.classList.add("active");

    document.querySelector(".profile-content").style.display = "block";
    document.querySelector(".masonry-container").style.display = "block";
    document.querySelector(".profile-saved-content").style.display = "none";
    document.querySelector(".masonry-container-saved").style.display = "none";
})
savedBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    createBtn.classList.remove("active");
    savedBtn.classList.add("active");

    document.querySelector(".profile-saved-content").style.display = "block";
    document.querySelector(".masonry-container-saved").style.display = "block";
    document.querySelector(".profile-content").style.display = "none";
    document.querySelector(".masonry-container").style.display = "none";
})