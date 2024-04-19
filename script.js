//Função que cria uma nova div, a do fullSky.
function fullSky() 
{
    const sky = document.createElement('div');
    sky.classList.add('fullSky');
    document.body.insertBefore(sky, document.body.firstChild); //Insere o céu no topo
}


//Classe CLoud que serve como base para as nuvens atuais.
class Cloud {
    constructor(left, right, animation, animationDuration) {
        this.cloudElement = document.createElement('div');
        this.cloudElement.classList.add('cloudMain');
        this.cloudElement.style.height = Math.floor(Math.random() * 4) + 'em';
        this.cloudElement.style.top = Math.floor(Math.random() * (window.innerHeight-100)) + 'px';
        this.cloudElement.style.width = Math.floor(Math.random() * 10) + 'em';
        this.cloudElement.style.left = left;
        this.cloudElement.style.right = right;
        this.cloudElement.style.animation = animation;
        this.cloudElement.style.animationDuration = animationDuration;
    }
    addToBody() {
        document.body.appendChild(this.cloudElement);
    }
}


//Classe base para criar estrelas em locais e tamanhos variados.
class Star {
    constructor(left, top, size) {
        this.starElement = document.createElement('div');
        this.starElement.classList.add('stars');
        this.starElement.style.left = left;
        this.starElement.style.top = top;
        this.starElement.style.height = size;
        this.starElement.style.width = size;
        this.starElement.addEventListener('animationend', () => {
            this.starElement.style.animation = 'rotate 6s ease infinite'; //Adiciona animação rotate após a animação fadeIn acabar
        });
    }
    addToBody() {
        document.body.appendChild(this.starElement);
    }
}

class TextBalloon {
    constructor(top, left, height, width, textContent, borderRadius, gmail) {
        this.textBalloonElement = document.createElement('div');
        this.textBalloonElement.classList.add('textBalloon');
        this.textBalloonElement.style.top = top;
        this.textBalloonElement.style.left = left;
        this.textBalloonElement.style.height = height;
        this.textBalloonElement.style.width = width;
        this.textBalloonElement.textContent = textContent;
        this.textBalloonElement.style.fontFamily = 'Arial';
        this.textBalloonElement.style.fontSize = '20px';
        this.textBalloonElement.style.borderRadius = borderRadius;
        this.textBalloonElement.style.textOverflow = 'hidden';
        
        
        
        if(gmail) {
            gmail = document.querySelector('.overlay_gmail');
            this.textBalloonP = document.createElement('p');
            this.textBalloonP.innerHTML = 'Clique aqui para<br>copiar o meu e-mail!';
            this.textBalloonP.style.left = 1315+'px';
            this.textBalloonP.style.top = 338+'px';
            this.textBalloonP.style.position = 'absolute';
            gmail.addEventListener('click', () => {
                this.textBalloonP.innerHTML = 'E-mail copiado!';
                this.textBalloonP.style.left = 1335+'px';
                this.textBalloonP.style.top = 350+'px';

                const email = 'felipe95176@gmail.com';
                const clicked = document.createElement('input');
                clicked.value = email;
                document.body.appendChild(clicked);
                clicked.select();
                document.execCommand('copy');
                document.body.removeChild(clicked);
            });
            this.textBalloonP.style.opacity = 0;
            this.textBalloonP.style.zIndex = 3;
            this.textBalloonP.style.textAlign = 'center';
            this.textBalloonP.style.background = 'none';
            this.textBalloonP.style.fontFamily = 'Arial';
            this.textBalloonP.style.fontSize = '18px';
            
            document.body.appendChild(this.textBalloonP);

            let animou = false;
            let dentro = false;
            gmail.addEventListener('mouseenter', () => {
                this.textBalloonP.style.animation = 'fadeIn 1s ease-in-out forwards';
                animou = false;
                dentro = true;
                this.textBalloonElement.classList.remove('animationForGmail_mouseIsOut');
                this.textBalloonElement.classList.add('animationForGmail_mouseIsIn');
                
                this.textBalloonElement.addEventListener('animationend', () => {
                    animou = true;
                });
            });
            
            gmail.addEventListener('mouseleave', () => {
                this.textBalloonP.style.animation = 'none';
                this.textBalloonP.innerHTML = 'Clique aqui para<br>copiar o meu e-mail!';
                this.textBalloonP.style.left = 1315+'px';
                this.textBalloonP.style.top = 338+'px';
                this.textBalloonElement.classList.remove('animationForGmail_mouseIsIn');
                if(dentro == true && animou == true) {
                    this.textBalloonElement.classList.add('animationForGmail_mouseIsOut');
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
        100 + 'px',

    );

    //Linkedin
    const textBalloon4 = new TextBalloon(
        -1340 + 'px',
        250 +'px',
        100 + 'px',
        100 + 'px',

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
        -1140 + 'px',
        250 +'px',
        80 + 'px',
        140 + 'px',
        'teste6'
    );
    textBalloon1.addToBody();
    textBalloon2.addToBody();
    textBalloon3.addToBody();
    textBalloon4.addToBody();
   
    textBalloon5.addToBody();
    textBalloon6.addToBody();

    
    
}
textBalloon();


//Função para mudar a animação do botão que aciona a função adicionarEspacoAcime().
function upArrow() 
{
    const upArrow = document.querySelector('.upArrow');
    upArrow.classList.add('upArrow');
    upArrow.style.animation = 'move_upArrow_ToDown 1s ease-in';
    upArrow.style.animationFillMode = 'forwards';
    setTimeout(() => {
        upArrow.style.display = 'none';
    }, 2000);
    
}
function downArrow() 
{
    const downArrow = document.querySelector('.downArrow');
    downArrow.classList.add('downArrow');
    downArrow.style.animation = 'move_downArrow_ToUp 1s ease-in';
    downArrow.style.animationFillMode = 'forwards';
    downArrow.style.display = 'block';
    setTimeout(() => {
        downArrow.style.animation = 'downArrowIdle 2s ease-in-out infinite';
        
    }, 1000);
}



/*Função que adiciona margem ao body, além de iniciar algumas outras funções 
como buttonToUpTheSky(), fullSky(), createStar() e, 
createCloudsLeft e createCloudsRight.*/
function increaseTheTopMargin() 
{
    //Adiciona margem superior ao body da página.
    document.body.style.marginTop = '1000px';

    const noScroll = document.querySelector('*');
    noScroll.classList.add('*');
    noScroll.style.overflow = 'hidden';
    

    upArrow();
    fullSky();
    
    //Criar i estrelas.
    for (let i = 0; i < 13; i++) 
    {
        const stars = new Star(
            Math.floor(Math.random() * window.innerWidth) + 'px',
            Math.floor(Math.random() * (window.innerHeight / 1.7)) + 'px',
            Math.floor(Math.random() * 4) + 'px'
        );
        stars.addToBody();
    }

    /*Dois for's, um para cada uso da classe Cloud, 
    sendo o primeiro para criar as nuvens da esquerda
    e o segundo para criar as nuvens da direita*/
    for (let i = 0; i < 8; i++) 
    {
        const cloudLeft = new Cloud(
            Math.floor(Math.random() * -500) + 'px',
            500,
            'moveLeftToRight 100s linear infinite',
            (Math.random() * ((150 - 50)) + 50) + 's'
        );
        cloudLeft.addToBody();
    }
    for (let i = 0; i < 2; i++) 
    {
        const cloudRight = new Cloud(
            500,
            Math.floor(Math.random() * 500) + 'px',
            'moveRightToLeft 5s linear infinite',
            (Math.random() * ((250 - 150)) + 150) + 's'
        );
        cloudRight.addToBody();
    }
    
    //Adiciona um delay de 5 segundos para executar a função buttontoDownTheSky().
    setTimeout(() => {
        downArrow();
    }, 5000);
}


/*Função que volta a margem ao padrão (0px), e 
além de remover as estrelas e as núvens, 
ainda adicionar uma animação para que seja mais flúida a alteração do céu.*/
function marginToNormal()
{
    document.body.style.marginTop = '0px';

    const noScroll = document.querySelector('*');
    noScroll.classList.add('*');
    noScroll.style.overflow = 'auto';

    const stars = document.querySelectorAll('.stars');
    stars.forEach(stars => {
        stars.parentNode.removeChild(stars);
    });

    const clouds = document.querySelectorAll('.cloudMain');
    clouds.forEach(cloud => {
        cloud.parentNode.removeChild(cloud);
    });

    const fullSky = document.querySelector('.fullSky');
    fullSky.style.animation = 'lessSky 2s ease';
    setTimeout(() => {
        fullSky.parentNode.removeChild(fullSky);
    }, 2000);

    const downArrow = document.querySelector('.downArrow');
    downArrow.classList.add('downArrow');
    downArrow.style.animation = 'move_downArrow_ToInfinite 1s ease-in';
    downArrow.style.animationFillMode = 'forwards';
    setTimeout(() => {
        downArrow.style.display = 'none';
    }, 1500)
    

    const upArrow = document.querySelector('.upArrow');
    upArrow.classList.add('upArrow');
    setTimeout(() => {
        upArrow.style.animation = 'move_upArrow_ToNormal 1.5s ease-in-out';
        upArrow.style.animationFillMode = 'forwards';
        upArrow.style.display = 'block';
        setTimeout(() => {
            upArrow.style.animation = 'upArrowIdle 2s ease-in-out infinite';
        }, 1500);
    }, 500);
}
