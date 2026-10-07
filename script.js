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
 

 // tous les boutons qui doivent m'amene ves mon whatsapp

 const btnLinks = document.querySelectorAll('.btnLinks');
 const myName = 'Augustin Kisanga'
 for (let i =0; i< btnLinks.length; i++ ){
    btnLinks[i].addEventListener('click', function(){
        window.location.href=`https://wa.me/243847668380?text=Bonjour%20 ${myName} `
    })
 }


 const form = document.getElementById('contactForm');
 form.addEventListener('submit', function(e){
    e.preventDefault();

    let nom = document.getElementById('nom').value;
    let numero = document.getElementById('numero').value;
    let subjet = document.getElementById('subject').value;

    let message = document.getElementById('message');

    let numeroTel ="243847668380"
    let text = ` nom${nom} \n numero${numero} \n subject${subject} \n\n message${message}`;

    console.log(text)

    let url = `https://wa.me/${numeroTel}?text=${text}`

    window.open(url, '_blanck');
 });

 // responsive design

 const mobileToggle = document.getElementById('toggleMenu');

 mobileToggle.addEventListener('click', menuActive);

 function menuActive () {
    document.getElementById('menu').classList.toggle('menu-active');
   
   const links = document.querySelectorAll('#menu a');
   
   for (let a in links){
    let link = links[a];
    
    link.addEventListener('click', function (){
        document.getElementById('menu').classList.remove('menu-active');
        console.log(link)
    });
 }
}

 
