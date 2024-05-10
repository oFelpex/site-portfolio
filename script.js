class TextBalloon {
    constructor(top, left, height, width, textContent, borderRadius, gmail, whatsapp) {
        this.textBalloonElement = document.createElement('div');
        this.textBalloonElement.classList.add('textBalloon');
        this.textBalloonElement.style.top = top;
        this.textBalloonElement.style.left = left;
        this.textBalloonElement.style.height = height;
        this.textBalloonElement.style.width = width;
        this.textBalloonElement.textContent = textContent;
        this.textBalloonElement.style.borderRadius = borderRadius;
        this.textBalloonElement.style.fontFamily = 'Arial';
        this.textBalloonElement.style.fontSize = '20px';
        
        if(gmail) {
            gmail = document.querySelector('.overlay_gmail');
            this.textBalloon5_Gmail = document.createElement('p');
            this.textBalloon5_Gmail.innerHTML = 'Clique aqui para<br>copiar o meu e-mail!';
            this.textBalloon5_Gmail.style.position = 'absolute';
            this.textBalloon5_Gmail.style.opacity = 0;
            this.textBalloon5_Gmail.style.zIndex = 3;
            this.textBalloon5_Gmail.style.textAlign = 'center';
            this.textBalloon5_Gmail.style.background = 'none';
            this.textBalloon5_Gmail.style.fontFamily = 'Arial';
            this.textBalloon5_Gmail.style.fontSize = '18px';
            this.textBalloon5_Gmail.style.left = 50+'%';
            this.textBalloon5_Gmail.style.top = 0+'px';
            this.textBalloon5_Gmail.style.transform = 'translate(220%, 340px)';
            
            gmail.addEventListener('click', () => {
                this.textBalloon5_Gmail.innerHTML = 'E-mail copiado!';
                this.textBalloon5_Gmail.style.transform = 'translate(300%, 350px)';
                
                const email = 'felipe95176@gmail.com';
                const clicked = document.createElement('input');
                clicked.value = email;
                document.body.appendChild(clicked);
                clicked.select();
                document.execCommand('copy');
                document.body.removeChild(clicked);
            });
            
            
            document.body.appendChild(this.textBalloon5_Gmail);

            let animou = false;
            let dentro = false;
            gmail.addEventListener('mouseenter', () => {
                this.textBalloon5_Gmail.style.animation = 'fadeInAndSmoothMoviment 0.5s ease-in-out forwards';
                animou = false;
                dentro = true;
                this.textBalloonElement.classList.remove('animationForGmail_mouseIsOut');
                this.textBalloonElement.classList.add('animationForGmail_mouseIsIn');
                
                this.textBalloonElement.addEventListener('animationend', () => {
                    animou = true;
                });
            });
            
            gmail.addEventListener('mouseleave', () => {
                this.textBalloon5_Gmail.style.animation = 'none';
                this.textBalloon5_Gmail.innerHTML = 'Clique aqui para<br>copiar o meu e-mail!';
                this.textBalloon5_Gmail.style.transform = 'translate(220%, 340px)';
                
                this.textBalloonElement.classList.remove('animationForGmail_mouseIsIn');
                if(dentro == true && animou == true) {
                    this.textBalloonElement.classList.add('animationForGmail_mouseIsOut');
                }
                dentro = false;
                animou = false;
                });
            }

        if(whatsapp) {
            const whatsapp = document.querySelector('.overlay_whatsapp');
            this.textBalloon6_Whatsapp = document.createElement('p');
            this.textBalloon6_Whatsapp.innerHTML = 'Clique aqui para<br>copiar o meu número!';
            this.textBalloon6_Whatsapp.style.position = 'absolute';
            this.textBalloon6_Whatsapp.style.opacity = 0;
            this.textBalloon6_Whatsapp.style.zIndex = 3;
            this.textBalloon6_Whatsapp.style.textAlign = 'center';
            this.textBalloon6_Whatsapp.style.background = 'none';
            this.textBalloon6_Whatsapp.style.fontFamily = 'Arial';
            this.textBalloon6_Whatsapp.style.fontSize = '18px';
            this.textBalloon6_Whatsapp.style.left = 45+'%';
            this.textBalloon6_Whatsapp.style.top = 0+'px';
            this.textBalloon6_Whatsapp.style.transform = 'translate(175%, 488px)';

            whatsapp.addEventListener('click', () => {
                this.textBalloon6_Whatsapp.innerHTML = 'Número copiado!';
                this.textBalloon6_Whatsapp.style.transform = 'translate(235%, 500px)';
                
                const numPhone = '(84) 98709-5902';
                const clicked = document.createElement('input');
                clicked.value = numPhone;
                document.body.appendChild(clicked);
                clicked.select();
                document.execCommand('copy');
                document.body.removeChild(clicked);
            });
            
            document.body.appendChild(this.textBalloon6_Whatsapp);

            let animou = false;
            let dentro = false;
            whatsapp.addEventListener('mouseenter', () => {
                this.textBalloon6_Whatsapp.style.animation = 'fadeInAndSmoothMoviment 0.5s ease-in-out forwards';
                animou = false;
                dentro = true;
                this.textBalloonElement.classList.remove('animationForWhatsapp_mouseIsOut');
                this.textBalloonElement.classList.add('animationForWhatsapp_mouseIsIn');
                
                this.textBalloonElement.addEventListener('animationend', () => {
                    animou = true;
                });
            });
            
            whatsapp.addEventListener('mouseleave', () => {
                this.textBalloon6_Whatsapp.style.animation = 'none';
                this.textBalloon6_Whatsapp.innerHTML = 'Clique aqui para<br>copiar o meu número!';
                this.textBalloon6_Whatsapp.style.transform = 'translate(175%, 488px)';
                
                this.textBalloonElement.classList.remove('animationForWhatsapp_mouseIsIn');
                if(dentro == true && animou == true) {
                    this.textBalloonElement.classList.add('animationForWhatsapp_mouseIsOut');
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
    const textBalloon1 = new TextBalloon(
        -1100 + 'px',
        -250 +'px',
        80 + 'px',
        140 + 'px',
        'teste1'
    );
    
    const textBalloon2 = new TextBalloon(
        -1000 + 'px',
        -300 +'px',
        80 + 'px',
        140 + 'px',
        'teste2'
    );

    //Github
    const textBalloon3 = new TextBalloon(
        -900 + 'px',
        -245 +'px',
        100 + 'px',
        100 + 'px'

    );

    //Linkedin
    const textBalloon4 = new TextBalloon(
        -1340 + 'px',
        250 +'px',
        100 + 'px',
        100 + 'px'

    );

    //Gmail
    const textBalloon5 = new TextBalloon(
        -1240 + 'px',
        300 +'px',
        80 + 'px',
        95 + 'px',
        '',
        10+'px',
        true
        
    );
    
    
    //Whatsapp
    const textBalloon6 = new TextBalloon(
        -1180 + 'px',
        255 +'px',
        100 + 'px',
        100 + 'px',
        '',
        50+'px',
        false,
        true
    );

    textBalloon1.addToBody();
    textBalloon2.addToBody();
    textBalloon3.addToBody();
    textBalloon4.addToBody();
   
    
    textBalloon5.addToBody();
    textBalloon6.addToBody();
    
}
textBalloon();