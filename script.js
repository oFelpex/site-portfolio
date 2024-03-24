document.querySelectorAll('.cloudMain').forEach(function(cloudMain){
    cloudMain.style.height = Math.floor(Math.random() * 4) + 'em';
});

document.querySelectorAll('.cloudMain').forEach(function(cloudMain){
    cloudMain.style.top = Math.floor(Math.random() * 700) + 'px';
});

document.querySelectorAll('.cloudMain').forEach(function(cloudMain){
    cloudMain.style.width = Math.floor(Math.random() * 10) + 'em';
});

document.querySelectorAll('.cloudMain').forEach(function(cloudMain){
    cloudMain.style.left = Math.floor(Math.random() * -500) + 'px';
});

// Função para criar uma estrela
function createStar() {
    const star = document.createElement('div');
    star.classList.add('stars');
    star.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
    document.body.appendChild(star);
}

// Criar 3 estrelas
for (let i = 0; i < 3; i++) {
    createStar();
}

function createCloudsLeft() {
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

function createCloudsRight() {
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


for (let i = 0; i < 8; i++) {
    createCloudsLeft();
}
for (let i = 0; i < 2; i++) {
    createCloudsRight();
}




