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