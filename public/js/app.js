const contactForm = document.querySelector('.contact-form');
let nome = document.getElementById("nome");
let email = document.getElementById("email");
let mensagem = document.getElementById("mensagem");

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let formData = {
        nome: nome.value,
        email: email.value,
        mensagem: mensagem.value
    }
    let xhr= new XMLHttpRequest();
   
    xhr.open('POST','/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if (xhr.responseText == 'success'){
            alert ('Email enviado');
            nome.value='';
            email.value='';
            mensagem.value='';
        }else{
            alert('Algo errado, confira os dados.')
        }
    }
    
    xhr.send(JSON.stringify(formData));
})