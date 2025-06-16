// SET TIMEOUT 
// SET INTERVAL 

// function fun(){
//     document.getElementById('text').innerHTML = 'Hello'
// }
// setTimeout(fun, 3000)

// setTimeout(() => {
//     document.getElementById('text').innerHTML = 'Hi'
// } , 3000 )

// setTimeout(() => {
//     window.location.href = 'sample.html'
// }, 3000)

// setInterval(() => {
//     document.getElementById('text').innerHTML += 'Hi'
// }, 3000) 

// setInterval(() => {
//     var count = Number(document.getElementById('num').innerHTML)
    
//    if(count < 10){
//         document.getElementById('num').innerHTML = count + 1
//    }
    
// }, 100) 

// setInterval(() => {
//     var count = Number(document.getElementById('num').innerHTML)

//     if(count > 0){
//         document.getElementById('num').innerHTML = count - 1
//     }
//     else{
//         document.getElementById('text').innerHTML = 'Time Out'
//     }
// }, 100) 


function fun(event){
    event.preventDefault()
    var count = 5;
    document.getElementById('text').innerHTML = `You will be redirect to the next page within ${count} seconds`

    setInterval(() => {
        count = count - 1;
        document.getElementById('text').innerHTML = `You will be redirect to the next page within ${count} seconds`

        if(count == 0){
            // window.location.href = 'sample.html'
            window.location.href = 'https://www.youtube.com/'
        }

    }, 1000)

} 