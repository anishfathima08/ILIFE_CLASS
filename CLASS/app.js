function submitFun(event){
    event.preventDefault()
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username == 'abc' && password == '123'){
        window.location.href = 'sample.html'
    }
    else{
        // alert('Invalid Inputs')
        document.getElementById('error').innerHTML = '*Invalid Inputs'
        document.getElementById('error').style.color = 'red'
    }
} 

function passwordFun(){
    var passwordBox = document.getElementById('password')

    if(passwordBox.type === 'password'){
        passwordBox.type = 'text'
        document.getElementById('show').style.display = 'none'
        document.getElementById('hide').style.display = 'inline'
    }
    else{
        passwordBox.type = 'password'
        document.getElementById('show').style.display = 'inline'
        document.getElementById('hide').style.display = 'none'
    }
    
} 