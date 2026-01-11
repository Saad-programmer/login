
var logForm=document.querySelector('input[name="login"]')
var passForm=document.querySelector('input[name="password"]')
var validationBoutton=document.querySelector('button')

function validEmail(email){
    regex=/^[a-zA-Z0-9_.]+@[a-z]+\.[a-z]{2,3}/
    return regex.test(email)
}

function valiPassword(password){
    regex=/[a-zA-Z0-9]{3}/
    return regex.test(password)
}


logForm.addEventListener('blur',function(event){
    p = document.querySelector('input[name="login"] ~ p')
    
    if(validEmail(event.target.value)){
        p.className='valid'
        p.textContent='Email valide'
    }else{
        p.className='invalid'
        p.textContent='Conditions non verifiees'
        validationBoutton.addEventListener('click',function(event){
            event.preventDefault();
            alert('Entrer un email valide')
        })
    }
})

passForm.addEventListener('blur',function(event){
    p=document.querySelector('input[name="password"] ~ p')

    if(valiPassword(event.target.value)){
        p.className='valid'
        p.textContent='password valide'
    }else{
        p.className='invalid'
        p.textContent='Conditions non verifiees'
        validationBoutton.addEventListener('click',function(event){
            event.preventDefault();
            alert('Entrer un password valide')
           
        })
    }
})