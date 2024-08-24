const menuButton = document.getElementById('menuButton');
const sideMenu = document.getElementById('sideMenu');
const closeBtn = document.getElementById('closeBtn');
const btn2 = document.getElementById("btn-order");
const filter = document.getElementById("blur");
const modal = document.getElementById("modal");
const closeBtnModal = document.getElementById("close-modal");
const btr = document.getElementById('btn-f2')

function openMenu() {
    sideMenu.classList.add('open');
}

function closeMenu() {
    sideMenu.classList.remove('open');
}

menuButton.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

window.addEventListener('click', (e) => {
    if (!sideMenu.contains(e.target) && !menuButton.contains(e.target)) {
        closeMenu();
    }
   
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        openMenu();
    } else if (e.key === 'ArrowLeft') {
        closeMenu();
    }
});


btn2.addEventListener("click", (e) => {
    if (e.target.id == "btn-order") {
        filter.style = "filter: blur(18px);";
        modal.style = "display:block";
    } 
})

closeBtnModal.addEventListener("click",(e)=>{
    filter.style = "filter: blur(0);";
    modal.style = "display:none";
})
btr.addEventListener('click',(e)=>{
    location.reload();
    
})
// setTimeout(function() {
//     var alert = document.getElementById('alert');
//     alert.style.opacity = '0';
//     setTimeout(function() {
//         alert.style.display = 'none';
//     }, 500);
// }, 5000);
function showNotification() {
    let notification = document.createElement("div");
    
    notification.innerText = "Serverga Jonatildi";
    
    notification.style.position = "fixed";
    notification.style.top = "20px";
    notification.style.left = "50%";
    notification.style.transform = "translateX(-50%)";
    notification.style.backgroundColor = "rgb(4, 214, 4)";
    notification.style.color = "white";
    notification.style.padding = "20px";
    notification.style.borderRadius = "5px";
    notification.style.zIndex = "1000";
    notification.style.textAlign = "center";
    
    document.body.appendChild(notification);
    
    setTimeout(function() {
        document.body.removeChild(notification);
    }, 3000);

localStorage.setItem('showNotification', 'true');
    }

    window.onload = function() {
        if (localStorage.getItem('showNotification') === 'true') {
            showNotification();
        }
    };