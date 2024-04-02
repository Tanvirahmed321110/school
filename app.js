

// Header scroll 
window.addEventListener("scroll",()=>{
    document.querySelector('.header-wrapper').classList.toggle('header-wrapper-scroll',window.scrollY>100)
})


// Question and Ans
const allQuesAns = document.querySelectorAll('.frequently-ques-item');

allQuesAns.forEach(each =>{
    each.addEventListener('click',()=>{
        each.classList.toggle('open');
        
        const icon = each.querySelector('.ques-icon i');
        
        if(icon.className === "uil uil-plus"){
            icon.className = 'uil uil-minus'
        }
        else{
            icon.className = 'uil uil-plus'
        }
    })
})





// responsive nav
const navItems = document.querySelector('.nav-items');
const menuBtn = document.getElementById('open-menu-btn');
const closeBtn = document.getElementById('close-menu-btn');

menuBtn.addEventListener('click',()=>{
    navItems.classList.add("active");
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block'
})
closeBtn.addEventListener('click',()=>{
    navItems.classList.remove("active");
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none'
})