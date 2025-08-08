const keyboardArrowDownBtn = document.querySelector(".keyboard-arrow-down");
const keyboardArrowDownContainerBtn = document.querySelector(".keyboard-arrow-down-container");
const notificationPanelBtn = document.querySelector(".notification-panel");
const notificationBtn = document.querySelector("#sidebar-notification-btn");
const messagePanelBtn = document.querySelector(".message-panel");
const messageBtn = document.querySelector("#sidebar-message-btn");
const settingPanelBtn = document.querySelector(".setting-panel");
const settingBtn = document.querySelector("#setting-btn")



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

    if(notificationBtn.classList.contains("active")){
        notificationPanelBtn.style.display = "none";
        notificationBtn.classList.remove("active");
    }else{
        notificationPanelBtn.style.display = "block";
        notificationBtn.classList.add("active");
    }
})
messageBtn.addEventListener('click',(e) => {
    e.preventDefault();
    
    if(messageBtn.classList.contains("active")){
        messagePanelBtn.style.display = "none";
        messageBtn.classList.remove("active");
    }else{
        messagePanelBtn.style.display = "block";
        messageBtn.classList.add("active");
    }
})
settingBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    if(settingBtn.classList.contains("active")){
        settingPanelBtn.style.display = "none";
        settingBtn.classList.remove("active");
    }else{
        settingPanelBtn.style.display = "block";
        settingBtn.classList.add("active");
    }
})