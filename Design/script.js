// ! Script for Scroll Btn !!!!!!!!!!!!!!!!

let scrollBtn = document.getElementById('scrollBtn');

window.onscroll = function(){
    if(scrollY >= 51)
    {
        scrollBtn.style.transform = 'scale(1)';
    } else {
        scrollBtn.style.transform = 'scale(0)';
    }
}


scrollBtn.onclick = function(){
    window.scroll({
        top:0,
        behavior:'smooth',
    })
}


// ! Script Styles for projectsDashboardAbtMe

const exp = document.querySelector('.exp');
const completed = document.querySelector('.completedProjectsDashboard');
const online = document.querySelector('.OnlineAbtMe');

exp.addEventListener('mouseenter', function() {
    completed.style.filter = "blur(2px)";
    online.style.filter = "blur(2px)";
    exp.style.transform = "scale(1.2)";
});

exp.addEventListener('mouseleave', function() {
    completed.style.filter = "";
    online.style.filter = "";
    exp.style.transform = "";
});


completed.addEventListener('mouseenter', function() {
    exp.style.filter = "blur(2px)";
    online.style.filter = "blur(2px)";
    completed.style.transform = "scale(1.2)";
});

completed.addEventListener('mouseleave', function() {
    exp.style.filter = "";
    online.style.filter = "";
    completed.style.transform = "";
});


online.addEventListener('mouseenter', function() {
    completed.style.filter = "blur(2px)";
    exp.style.filter = "blur(2px)";
    online.style.transform = "scale(1.2)";
});

online.addEventListener('mouseleave', function() {
    completed.style.filter = "";
    exp.style.filter = "";
    online.style.transform = "";
});

