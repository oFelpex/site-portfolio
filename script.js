//Classe CLoud que serve como base para as nuvens atuais.
class Cloud {
    constructor(left, right, animation, animationDuration) {
        this.cloudElement = document.createElement('div');
        this.cloudElement.classList.add('cloudMain');
        this.cloudElement.style.height = Math.floor(Math.random() * 4) + 'em';
        this.cloudElement.style.top = Math.floor(Math.random() * 700) + 'px';
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


//Função que cria uma nova div, a do fullSky.
function fullSky() 
{
    const sky = document.createElement('div');
    sky.classList.add('fullSky');
    document.body.insertBefore(sky, document.body.firstChild); //Insere o céu no topo
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


//Função para mudar a animação do botão que aciona a função adicionarEspacoAcime().
function buttonToUpTheSky() 
{
    const button = document.querySelector('buttonToUpTheSky');
    button.classList.add('buttonToUpTheSky');
    button.style.animation = 'moveButton1ToDown 1s ease-in';
    button.style.animationFillMode = 'forwards';
}


function buttonToDownTheSky() 
{
    const button = document.querySelector('buttonToDownTheSky');
    button.classList.add('buttonToDownTheSky');
    button.style.animation = 'moveButton2ToUp 1s ease-in';
    button.style.animationFillMode = 'forwards';
}


/*Função que adiciona margem ao body, além de iniciar algumas outras funções 
como buttonToUpTheSky(), fullSky(), createStar() e, 
createCloudsLeft e createCloudsRight.*/
function adicionarEspacoAcima() 
{
    //Adiciona margem superior ao body da página.
    document.body.style.marginTop = '800px';

    buttonToUpTheSky();
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
            Math.floor(Math.random() * -500) + 'px',
            'moveRightToLeft 5s linear infinite',
            (Math.random() * ((250 - 150)) + 150) + 's'
        );
        cloudRight.addToBody();
    }
    
    //Adiciona um delay de 5 segundos para executar a função buttontoDownTheSky().
    setTimeout(() => {
        buttonToDownTheSky();
    }, 5000);
}


/*Função que volta a margem ao padrão (0px), e 
além de remover as estrelas e as núvens, 
ainda adicionar uma animação para que seja mais flúida a alteração do céu.*/
function marginToNormal()
{
    document.body.style.marginTop = '0px';

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

    const button2 = document.querySelector('buttonToDownTheSky');
    button2.classList.add('buttonToDownTheSky');
    button2.style.animation = 'moveButton2ToInfinite 1s ease-in';
    button2.style.animationFillMode = 'forwards';

    const button1 = document.querySelector('buttonToUpTheSky');
    button1.classList.add('buttonToUpTheSky');
    setTimeout(() => {
        button1.style.animation = 'moveButton1ToNormal 1.5s ease-in-out';
        button1.style.animationFillMode = 'forwards';
    }, 500);
}