function returnTop(topValue) {
    window.scrollTo({top: topValue, behavior: 'smooth'});
}
function showAboutMe() {
    returnTop(620);
    showAboutMe_underlay = document.querySelector('.showAboutMe_underlay');
    showAboutMe_underlay.style.animation = 'showAboutMe_purple 1s ease-in-out';
    showAboutMe_underlay.addEventListener('animationend', () =>{
        showAboutMe_underlay.style.animation = 'none';
    });
}
function showMyContacts() {
    returnTop(100);
    showMyContacts_underlay = document.querySelector('.showMyContacts_underlay');
    showMyContacts_underlay.style.animation = 'showMyContacts_purple 1s ease-in-out';
    showMyContacts_underlay.addEventListener('animationend', () =>{
        showMyContacts_underlay.style.animation = 'none';
    });
}
function showMyProjects() {
    returnTop(1450);
}
