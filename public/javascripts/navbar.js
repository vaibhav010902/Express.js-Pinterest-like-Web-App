const keyboardArrowDownBtn = document.querySelector(".keyboard-arrow-down");
const keyboardArrowDownContainerBtn = document.querySelector(".keyboard-arrow-down-container");
const notificationPanelBtn = document.querySelector(".notification-panel");
const notificationBtn = document.querySelector("#sidebar-notification-btn");
const messagePanelBtn = document.querySelector(".message-panel");
const messageBtn = document.querySelector("#sidebar-message-btn");
const settingPanelBtn = document.querySelector(".setting-panel");
const settingBtn = document.querySelector("#setting-btn")
const sidebarBtns = document.querySelectorAll(".material-symbols-outlined");

// Restore active button from localStorage
const savedActiveId = localStorage.getItem("activeSidebarBtn");
if (savedActiveId) {
    const savedBtn = document.getElementById(savedActiveId);
    if (savedBtn) {
        savedBtn.classList.add("active");
    }
}

sidebarBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        // Remove active from all buttons
        sidebarBtns.forEach(b => b.classList.remove("active"));

        // Add active to clicked button
        btn.classList.add("active");

        // Save active button ID in localStorage
        localStorage.setItem("activeSidebarBtn", btn.id);
    });
});



keyboardArrowDownBtn.addEventListener('click', () => {
    if(keyboardArrowDownBtn.className === "keyboard-arrow-down"){
        keyboardArrowDownContainerBtn.style.display="block";
        keyboardArrowDownBtn.classList.replace("keyboard-arrow-down","keyboard-arrow-up");
        keyboardArrowDownBtn.firstElementChild.textContent = "keyboard_arrow_up"
    }else{
        keyboardArrowDownContainerBtn.style.display="none";
        keyboardArrowDownBtn.classList.replace("keyboard-arrow-up","keyboard-arrow-down");
        keyboardArrowDownBtn.firstElementChild.textContent = "keyboard_arrow_down"
    }
})  

notificationBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    if(notificationBtn.classList.contains("panel-open")){
        notificationPanelBtn.style.display = "none";
        notificationBtn.classList.remove("panel-open");
    }else{
        notificationPanelBtn.style.display = "block";
        notificationBtn.classList.add("panel-open");
    }
})
messageBtn.addEventListener('click',(e) => {
    e.preventDefault();
    
    if(messageBtn.classList.contains("panel-open")){
        messagePanelBtn.style.display = "none";
        messageBtn.classList.remove("panel-open");
    }else{
        messagePanelBtn.style.display = "block";
        messageBtn.classList.add("panel-open");
    }
})
settingBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    if(settingBtn.classList.contains("panel-open")){
        settingPanelBtn.style.display = "none";
        settingBtn.classList.remove("panel-open");
    }else{
        settingPanelBtn.style.display = "block";
        settingBtn.classList.add("panel-open");
    }
})