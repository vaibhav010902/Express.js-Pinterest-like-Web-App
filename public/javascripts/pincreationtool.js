const allowPeopleToCommentBtn = document.querySelector(".allow-people-to-comment-btn");
const allowPeopleToCommentToggle = document.querySelector(".allow-people-to-comment-btn p");
const showSimilarProductsBtn = document.querySelector(".show-similar-products-btn");
const showSimilarProductsToggle = document.querySelector(".show-similar-products-btn p");
const fileInput = document.getElementById("file-upload");
const choseFileContainer = document.querySelector(".choose-file") 
const previewContainer = document.querySelector(".file-preview")
const sidepanelBtn = document.querySelector("#pin-creation-tool-sidepanel-btn .material-symbols-outlined")
const sidePanelContainer = document.querySelector(".pin-creation-tool-side-panel")
const pinCreationToolContainerNavbar = document.querySelector(".pin-creation-tool-container-navbar")
const pinCreationToolMainContainer = document.querySelector(".pin-creation-tool-main-container")

function fileDisplayFunction(){
    choseFileContainer.style.display = "none";
    document.getElementById("choose-file-form-below-border").style.display = "none";
    document.getElementById("pin-creation-tool-main-container-left-btn").style.display = "none";
    previewContainer.style.display = "flex";
    document.querySelector(".pin-creation-tool-main-container-right-disable").style.display = "none"
    document.querySelector(".publish-btn").style.display = "flex"
}
fileInput.addEventListener("change", () => {
    
    console.log(fileInput.files)

    previewContainer.innerHTML = "";
    const file = fileInput.files[0];
    if(!file) return;

    fileDisplayFunction();
    const reader = new FileReader();

    reader.onload = (e) => {
        if(file.type.startsWith('image/')){
            const img = document.createElement("img");
            img.src = e.target.result;
            img.style.maxWidth = "100%";
            img.style.maxHeight = "400px";
            img.style.borderRadius = "10px"
            previewContainer.appendChild(img);
        }else if(file.type.startsWith('video/')){
            const video = document.createElement('video');
            video.src = e.target.result;
            video.controls = true;
            video.style.maxWidth = "100%";
            video.style.maxHeight = "300px";
            previewContainer.appendChild(video);
        }else {
            previewContainer.textContent = "File type not supported for preview.";
        }
    }
    reader.readAsDataURL(file);
})

const moreOptionsBtn = document.querySelector("#container-4-p");
const moreOptionsBtnContent = document.querySelector(".container-5")
// const allowPeopleToCommentCaptionBtn = document.querySelector(".allow-people-to-comment-caption");

console.log(moreOptionsBtn)
function allowPeopleToCommentToggleFunction(){
    allowPeopleToCommentBtn.classList.toggle("active")
    allowPeopleToCommentToggle.classList.toggle("active")
}
function showSimilarProductsToggleFunction(){
    showSimilarProductsBtn.classList.toggle("active")
    showSimilarProductsToggle.classList.toggle("active")
}

allowPeopleToCommentBtn.addEventListener("click", ()=>{
    allowPeopleToCommentToggleFunction()
})
// allowPeopleToCommentToggle.addEventListener("click", ()=>{
//     allowPeopleToCommentToggleFunction()
// })
showSimilarProductsBtn.addEventListener("click", () =>{
    showSimilarProductsToggleFunction()
})
// showSimilarProductsToggle.addEventListener("click", () => {
//     showSimilarProductsToggleFunction()
// })
moreOptionsBtn.addEventListener("click", (e) => {
    const btn = document.querySelector("#container-4-p .material-symbols-outlined");
    moreOptionsBtnContent.classList.toggle("visible");

    if (moreOptionsBtnContent.classList.contains("visible")) {
        btn.textContent = "keyboard_arrow_up";
    } else {
        btn.textContent = "keyboard_arrow_down";
    }
});

sidepanelBtn.addEventListener("click", ()=>{
    console.log("clicked")
    if (window.getComputedStyle(sidePanelContainer).display === "none") {
            sidepanelBtn.textContent = "keyboard_double_arrow_right";
            pinCreationToolContainerNavbar.classList.add("sidepanelactive");
            pinCreationToolMainContainer.classList.add("sidepanelactive");
            sidePanelContainer.classList.add("sidepanelactive");
        } else {
            sidepanelBtn.textContent = "keyboard_double_arrow_left";
            pinCreationToolContainerNavbar.classList.remove("sidepanelactive");
            pinCreationToolMainContainer.classList.remove("sidepanelactive");
            sidePanelContainer.classList.remove("sidepanelactive");
        }
}) 