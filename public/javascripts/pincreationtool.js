const allowPeopleToCommentBtn = document.querySelector(".allow-people-to-comment-btn");
const allowPeopleToCommentToggle = document.querySelector(".allow-people-to-comment-btn p");
const showSimilarProductsBtn = document.querySelector(".show-similar-products-btn");
const showSimilarProductsToggle = document.querySelector(".show-similar-products-btn p");

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