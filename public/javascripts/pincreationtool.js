const allowPeopleToCommentBtn = document.querySelector(".allow-people-to-comment-btn");
const allowPeopleToCommentToggle = document.querySelector(".allow-people-to-comment-btn p");
const showSimilarProductsBtn = document.querySelector(".show-similar-products-btn");
const showSimilarProductsToggle = document.querySelector(".show-similar-products-btn p");
// const allowPeopleToCommentCaptionBtn = document.querySelector(".allow-people-to-comment-caption");


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
allowPeopleToCommentToggle.addEventListener("click", ()=>{
    allowPeopleToCommentToggleFunction()
})
showSimilarProductsBtn.addEventListener("click", () =>{
    showSimilarProductsToggleFunction()
})
showSimilarProductsToggle.addEventListener("click", () => {
    showSimilarProductsToggleFunction()
})