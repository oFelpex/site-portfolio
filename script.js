function returnTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
function showAboutMe() {
    returnTop();
    showAboutMe_underlay = document.querySelector('.showAboutMeUnderlay');
    showAboutMe_underlay.style.animation = 'showAboutMeUnderlay_purple 1s ease-in-out';
    showAboutMe_underlay.addEventListener('animationend', () =>{
        showAboutMe_underlay.style.animation = 'none';
    });
}
function showMyContacts() {
    returnTop();
    showMyContacts_underlay = document.querySelector('.showMyContactsUnderlay');
    showMyContacts_underlay.style.animation = 'showMyContacts_purple 1s ease-in-out';
    showMyContacts_underlay.addEventListener('animationend', () =>{
        showMyContacts_underlay.style.animation = 'none';
    });
}
class TextBalloon {
    constructor(top, left, height, width, gmail, whatsapp) {
        this.textBalloonElement = document.createElement('div');
        this.textBalloonElement.classList.add('textBalloon');
        this.textBalloonElement.style.top = top;
        this.textBalloonElement.style.left = left;
        this.textBalloonElement.style.height = height;
        this.textBalloonElement.style.width = width;
        if(gmail) {
            gmail = document.querySelector('.overlay_gmail');
            this.textBalloon3_Gmail = document.createElement('p');
            this.textBalloon3_Gmail.innerHTML = 'Clique aqui para<br>copiar o meu e-mail!';
            this.textBalloon3_Gmail.style.position = 'absolute';
            this.textBalloon3_Gmail.style.opacity = 0;
            this.textBalloon3_Gmail.style.zIndex = 3;
            this.textBalloon3_Gmail.style.textAlign = 'center';
            this.textBalloon3_Gmail.style.background = 'none';
            this.textBalloon3_Gmail.style.fontFamily = 'Arial';
            this.textBalloon3_Gmail.style.fontSize = '16px';
            this.textBalloon3_Gmail.style.left = 50+'%';
            this.textBalloon3_Gmail.style.top = 0+'px';
            this.textBalloon3_Gmail.style.transform = 'translate(-225%, 468px)';
            
            gmail.addEventListener('click', () => {
                this.textBalloon3_Gmail.innerHTML = 'E-mail copiado!';
                this.textBalloon3_Gmail.style.transform = 'translate(-280%, 478px)';
                
                const email = 'felipe95176@gmail.com';
                const clicked = document.createElement('input');
                clicked.value = email;
                document.body.appendChild(clicked);
                clicked.select();
                document.execCommand('copy');
                document.body.removeChild(clicked);
            });
            document.body.appendChild(this.textBalloon3_Gmail);

            let animou = false;
            let dentro = false;
            gmail.addEventListener('mouseenter', () => {
                this.textBalloon3_Gmail.style.animation = 'fadeInAndSmoothMoviment 0.5s ease-in-out forwards';
                animou = false;
                dentro = true;
                this.textBalloonElement.classList.remove('animationWhenTheMouseLeave');
                this.textBalloonElement.classList.add('animationWhenTheMouseIsIn');
                
                this.textBalloonElement.addEventListener('animationend', () => {
                    animou = true;
                });
            });
            gmail.addEventListener('mouseleave', () => {
                this.textBalloon3_Gmail.style.animation = 'none';
                this.textBalloon3_Gmail.innerHTML = 'Clique aqui para<br>copiar o meu e-mail!';
                this.textBalloon3_Gmail.style.transform = 'translate(-225%, 468px)';
                
                this.textBalloonElement.classList.remove('animationWhenTheMouseIsIn');
                if(dentro == true && animou == true) {
                    this.textBalloonElement.classList.add('animationWhenTheMouseLeave');
                }
                dentro = false;
                animou = false;
                });
            }
        if(whatsapp) {
            const whatsapp = document.querySelector('.overlay_whatsapp');
            this.textBalloon4_Whatsapp = document.createElement('p');
            this.textBalloon4_Whatsapp.innerHTML = 'Clique aqui para<br>copiar o meu número!';
            this.textBalloon4_Whatsapp.style.position = 'absolute';
            this.textBalloon4_Whatsapp.style.opacity = 0;
            this.textBalloon4_Whatsapp.style.zIndex = 3;
            this.textBalloon4_Whatsapp.style.textAlign = 'center';
            this.textBalloon4_Whatsapp.style.background = 'none';
            this.textBalloon4_Whatsapp.style.fontFamily = 'Arial';
            this.textBalloon4_Whatsapp.style.fontSize = '16px';
            this.textBalloon4_Whatsapp.style.left = 45+'%';
            this.textBalloon4_Whatsapp.style.top = 0+'px';
            this.textBalloon4_Whatsapp.style.transform = 'translate(-215%, 541px)';
            whatsapp.addEventListener('click', () => {
                this.textBalloon4_Whatsapp.innerHTML = 'Número copiado!';
                this.textBalloon4_Whatsapp.style.transform = 'translate(-260%, 550px)';
                
                const numPhone = '(84) 98709-5902';
                const clicked = document.createElement('input');
                clicked.value = numPhone;
                document.body.appendChild(clicked);
                clicked.select();
                document.execCommand('copy');
                document.body.removeChild(clicked);
            });
            document.body.appendChild(this.textBalloon4_Whatsapp);
            let animou = false;
            let dentro = false;
            whatsapp.addEventListener('mouseenter', () => {
                this.textBalloon4_Whatsapp.style.animation = 'fadeInAndSmoothMoviment 0.5s ease-in-out forwards';
                animou = false;
                dentro = true;
                this.textBalloonElement.classList.remove('animationWhenTheMouseLeave');
                this.textBalloonElement.classList.add('animationWhenTheMouseIsIn');
                
                this.textBalloonElement.addEventListener('animationend', () => {
                    animou = true;
                });
            });
            whatsapp.addEventListener('mouseleave', () => {
                this.textBalloon4_Whatsapp.style.animation = 'none';
                this.textBalloon4_Whatsapp.innerHTML = 'Clique aqui para<br>copiar o meu número!';
                this.textBalloon4_Whatsapp.style.transform = 'translate(-215%, 541px)';
                
                this.textBalloonElement.classList.remove('animationWhenTheMouseIsIn');
                if(dentro == true && animou == true) {
                    this.textBalloonElement.classList.add('animationWhenTheMouseLeave');
                }
                dentro = false;
                animou = false;
                });
            }
        }
    addToBody() {
        document.body.appendChild(this.textBalloonElement);
    }
}
function textBalloon()
{
    //Github
    const textBalloon1 = new TextBalloon(
        -670 + 'px',
        -30 +'px',
        60 + 'px',
        60 + 'px'
    );

    //Linkedin
    const textBalloon2 = new TextBalloon(
        -730 + 'px',
        -105 +'px',
        60 + 'px',
        60 + 'px'
    );

    //Gmail
    const textBalloon3 = new TextBalloon(
        -868 + 'px',
        -370 +'px',
        70 + 'px',
        70 + 'px',
        true
    );
    
    
    //Whatsapp
    const textBalloon4 = new TextBalloon(
        -865 + 'px',
        -370 +'px',
        70 + 'px',
        70 + 'px',
        false,
        true
    );
    textBalloon1.addToBody();
    textBalloon2.addToBody();
    textBalloon3.addToBody();
    textBalloon4.addToBody();
    
}
textBalloon();