function returnTop(topValue) {
    window.scrollTo({top: topValue, behavior: 'smooth'});
}
function showAboutMe() {
    returnTop(520);
    showAboutMe_underlay = document.querySelector('.showAboutMe_underlay');
    showAboutMe_underlay.style.animation = 'showAboutMe_purple 1s ease-in-out';
    showAboutMe_underlay.addEventListener('animationend', () =>{
        showAboutMe_underlay.style.animation = 'none';
    });
}
function showMyContacts() {
    returnTop(0);
    showMyContacts_underlay = document.querySelector('.showMyContacts_underlay');
    showMyContacts_underlay.style.animation = 'showMyContacts_purple 1s ease-in-out';
    showMyContacts_underlay.addEventListener('animationend', () =>{
        showMyContacts_underlay.style.animation = 'none';
    });
}
function showMyProjects() {
    returnTop(1200);
    showMyProjects_underlay = document.querySelector('.showMyProjects_underlay');
    showMyProjects_underlay.style.animation = 'showMyProjects_purple 1s ease-in-out';
    showMyProjects_underlay.addEventListener('animationend', () =>{
        showMyProjects_underlay.style.animation = 'none';
    });
}
