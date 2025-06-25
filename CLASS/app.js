// function fun(){
//     alert('Hello')
// }

// addEventListener(event_name, function_name)

// function addFun(){
//     alert('Hello')
// }

// document.getElementById('addButton').addEventListener('click', addFun)

// function removeFun(){
//     document.getElementById('addButton').removeEventListener('click', addFun)
// }

// document.getElementById('removeButton').addEventListener('click', removeFun)

// function addFun(){
//     document.body.style.backgroundColor = document.body.style.backgroundColor == 'blue' ? 'white' : 'blue'
// }

// document.getElementById('addButton').addEventListener('click', addFun)

// function removeFun(){
//     document.getElementById('addButton').removeEventListener('click', addFun)
// }

// document.getElementById('removeButton').addEventListener('click', removeFun)


// function submitFun(event){
//     event.preventDefault();
//     var username = document.getElementById('username').value;

//     var password = document.getElementById('password').value;

//     if(username === 'abc' && password === '123'){
//         window.location.href  = 'sample.html'
//     }
//     else{
//         document.querySelector('p').innerHTML = 'Invalid Inputs*'
//         document.querySelector('p').style.color = 'red'
//     }
// }

function submitFun(event){
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    if(username === 'abc' && password === '123' && password === confirmPassword){
        window.location.href  = 'sample.html'
    }
    else{
        document.querySelector('p').innerHTML = 'Invalid Inputs*'
        document.querySelector('p').style.color = 'red'
    }
}

function passwordFun(){
    var passwordBox = document.getElementById('password')
    if(passwordBox.type == 'password'){
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

function confirmFun(){
    var confirmPasswordBox = document.getElementById('confirmPassword')
    if(confirmPasswordBox.type == 'password'){
        confirmPasswordBox.type = 'text'
        document.getElementById('Cshow').style.display = 'none'
        document.getElementById('Chide').style.display = 'inline'
    }
    else{
        confirmPasswordBox.type = 'password'
        document.getElementById('Cshow').style.display = 'inline'
        document.getElementById('Chide').style.display = 'none'
    }
}