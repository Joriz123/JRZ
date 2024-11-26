const btnAbout = document.getElementById('btnAbout');
const btnCourse = document.getElementById('btnCourse');
const btnContact = document.getElementById('btnContact');
const btnbtnEnroll = document.getElementById('btnEnroll')

btnCourse.addEventListener('click', (e)=>{
    e.preventDefault();
    window.location.href="Course.html"
});
btnAbout.addEventListener('click', (e)=>{
    e.preventDefault();
    window.location.href="about.html"
});
btnContact.addEventListener('click', (e)=>{
    e.preventDefault();
    window.location.href="contact.html"
});
btnbtnEnroll.addEventListener('click', (e)=>{
    e.preventDefault();
    window.location.href="prefinals.html"
});