

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