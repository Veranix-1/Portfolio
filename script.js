const btn=document.getElementById("dark-btn");

btn.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
})

// let userName = prompt("Ismin nima");
// let Name = prompt("Familyen nima");

// if (userName !== null) {
//     alert("Salom, " + userName + Name + "!");
// } else {
//     alert("Siz 'Отмена' bostingiz");
// }

// let age = prompt("nechi yoshsan", "1-100");

document.addEventListener('keydown', function(event) {
    
    if (event.key === 'k') {
        
        var darkBtn = document.getElementById('dark-btn');
        
        if (darkBtn) {
            darkBtn.click();
        }
    }
});