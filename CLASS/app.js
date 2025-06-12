function passwordFun(){
    var password = document.getElementById('passwordBox').value;
    
    var firstLetter = password.charAt(0);
    
    if(firstLetter === firstLetter.toUpperCase()){
        document.getElementsByTagName('p')[0].style.color = 'green'
    }
    else{
        document.getElementsByTagName('p')[0].style.color = 'red'
    }

    var num = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]

    if(num.some(a => password.includes(a))){
        document.getElementsByTagName('p')[1].style.color = 'green'
    }
    else{
        document.getElementsByTagName('p')[1].style.color = 'red'
    }

    var char = [ '@', '#', '$', '%', '^', '&', '*' ]

    if(char.some(a => password.includes(a))){
        document.getElementsByTagName('p')[2].style.color = 'green'
    }
    else{
        document.getElementsByTagName('p')[2].style.color = 'red'
    }

    if(password.length >= 5){
        document.getElementsByTagName('p')[3].style.color = 'green'
    }
    else{
        document.getElementsByTagName('p')[3].style.color = 'red'
    }

    if(password.length === 0){
        document.getElementsByTagName('p')[0].style.color = 'black'
        document.getElementsByTagName('p')[1].style.color = 'black'
        document.getElementsByTagName('p')[2].style.color = 'black'
        document.getElementsByTagName('p')[3].style.color = 'black'
    }
}