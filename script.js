//Cria as nuvens da esquerda
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

function fullSky() {
    const sky = document.createElement('div');
    sky.classList.add('sky');
    sky.style.height = '300px'; // Altura fixa do céu
    sky.style.position = 'absolute';
    document.body.insertBefore(sky, document.body.firstChild); // Insere o céu no início do corpo
}

// Função para criar estrelas
function createStar() {
    const star = document.createElement('div');
    star.classList.add('stars');
    star.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
    star.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
    star.addEventListener('animationend', () => {
        star.style.animation = 'rotate 6s ease infinite'; // Adiciona a classe 'infinito' após a conclusão da animação fadeIn
    });
    document.body.appendChild(star);
}


function adicionarEspaco() {
    // Adiciona margem superior ao corpo da página
    document.body.style.marginTop = '600px'; // Altere o valor conforme necessário
    
    fullSky();
    
    //Criar i estrelas
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
}

