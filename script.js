//Cria as nuvens da esquerda em locais aleatórios da parte esquerda da tela.
function createCloudsLeft() 
{
    const cloud = document.createElement('div');
    cloud.classList.add('cloudMain');
    cloud.style.height = Math.floor(Math.random() * 4) + 'em';
    cloud.style.top = Math.floor(Math.random() * 700) + 'px';
    cloud.style.width = Math.floor(Math.random() * 10) + 'em';
    cloud.style.left = Math.floor(Math.random() * -500) + 'px';
    cloud.style.animation = animation = 'moveLeftToRight 100s linear infinite';
    cloud.style.animationDuration = (Math.random() * ((150 - 50)) + 50) + 's';
    document.body.appendChild(cloud);
}
//Cria as nuvens da direita
function createCloudsRight() 
{
    const cloud = document.createElement('div');
    cloud.classList.add('cloudMain');
    cloud.style.height = Math.floor(Math.random() * 4) + 'em';
    cloud.style.top = Math.floor(Math.random() * 700) + 'px';
    cloud.style.width = Math.floor(Math.random() * 10) + 'em';
    cloud.style.right = Math.floor(Math.random() * -500) + 'px';
    cloud.style.animation = 'moveRightToLeft 5s linear infinite';
    cloud.style.animationDuration = (Math.random() * ((250 - 150)) + 150) + 's';

    document.body.appendChild(cloud);
}


//Função que cria uma nova div, a do fullSky.
function fullSky() 
{
    const sky = document.createElement('div');
    sky.classList.add('fullSky');
    document.body.insertBefore(sky, document.body.firstChild); //Insere o céu no topo
}


//Função para criar estrelas em locais aleatórios da tela.
function createStar() 
{
    const star = document.createElement('div');
    star.classList.add('stars');
    star.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
    star.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
    star.addEventListener('animationend', () => {
        star.style.animation = 'rotate 6s ease infinite'; // Adiciona a classe 'infinito' após a conclusão da animação fadeIn
    });
    document.body.appendChild(star);
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
    for (let i = 0; i < 7; i++) 
    {
        createStar();
    }

    /*Dois for's, cada uma para uma função de nuvem
    diferente, sendo o primeiro para as nuvens da esquerda
    e o segundo para as nuvens da direita*/
    for (let i = 0; i < 8; i++) 
    {
        createCloudsLeft();
    }
    for (let i = 0; i < 2; i++) 
    {
        createCloudsRight();
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