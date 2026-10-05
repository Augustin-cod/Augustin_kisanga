 const body = document.body;
 const btnTheme = document.getElementById('iconTheme');
 const btnClaire = document.getElementById('themeClair');
 const btnSombre = document.getElementById('themeSombre');

 btnTheme.onclick = function (){
    body.classList.toggle('dark-theme')
    if(body.className === 'dark-theme'){
        btnClaire.style.display='block';
        btnSombre.style.display = 'none'
    }else{
        btnClaire.style.display='none';
        btnSombre.style.display ='block'
    }
 }