const email =document.getElementById("email")
const password =document.getElementById("password")
const submit = document.getElementById("submit")

username =localStorage.getItem('email')
pass =localStorage.getItem('password')

submit.addEventListener('click' ,(e)=>{
    e.preventDefault();

    if (email.value == ''& password.value == ''){
        alert("must be enter your email and password")
        
    }else 
        if(username && username.trim() === email.value.trim() && pass && pass.trim() === password.value.trim()){
            
            setTimeout(()=>{
            location.assign("index.html")
        },1000)
      
    }else{
        alert('Email Or Password Invalid')
    }
    
})