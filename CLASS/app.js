// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName
// document.querySelector
// document.querySelectorAll

// document.createElement

// var h1tag = document.createElement('h1')
// h1tag.innerHTML = 'Hello'
// document.body.appendChild(h1tag) 

// var ptag = document.createElement('p')
// ptag.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, ab, corrupti, soluta beatae expedita voluptas possimus atque excepturi distinctio porro nesciunt blanditiis! Molestias, impedit. Non in quos quasi accusamus iure?'
// document.body.appendChild(ptag) 

// var atag = document.createElement('a')
// atag.innerHTML = 'Youtube'
// atag.href = 'https://www.youtube.com/'
// atag.target = '_blank'
// document.body.appendChild(atag)

// var imgTag = document.createElement('img')
// imgTag.src = 'img1.jpg'
// imgTag.alt = 'Error in image name'
// imgTag.width = '300'
// imgTag.height = '300'
// document.body.appendChild(imgTag)

// var centerTag = document.createElement('center')
// document.body.appendChild(centerTag)

// var h1tag = document.createElement('h1')
// h1tag.innerHTML = 'Hello'
// centerTag.appendChild(h1tag) 

// var oltag = document.createElement('ol')
// document.body.appendChild(oltag)

// var litag1 = document.createElement('li')
// litag1.innerHTML = 'HTML'
// oltag.appendChild(litag1)

// var litag2 = document.createElement('li')
// litag2.innerHTML = 'CSS'
// oltag.appendChild(litag2)

// var litag3 = document.createElement('li')
// litag3.innerHTML = 'BOOTSTRAP'
// oltag.appendChild(litag3)

// var hrtag = document.createElement('hr')
// document.body.appendChild(hrtag)

// var button = document.createElement('button')
// button.innerHTML = 'Click'
// document.body.appendChild(button)

// var marqueeTag = document.createElement('marquee')
// marqueeTag.innerHTML = 'Hello'
// marqueeTag.direction = 'right'
// document.body.appendChild(marqueeTag)

// var ptag = document.createElement('p')
// ptag.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui reiciendis ea debitis tempore quaerat placeat distinctio ipsa assumenda soluta. A quisquam possimus ut numquam minus vel delectus? Dolores modi, facilis quo dignissimos ducimus optio incidunt rerum dolorum unde fuga quaerat, qui nihil error natus itaque facere, non quam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui reiciendis ea debitis tempore quaerat placeat distinctio ipsa assumenda soluta. A quisquam possimus ut numquam minus vel delectus? Dolores modi, facilis quo dignissimos ducimus optio incidunt rerum dolorum unde fuga quaerat, qui nihil error natus itaque facere, non quam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui reiciendis ea debitis tempore quaerat placeat distinctio ipsa assumenda soluta. A quisquam possimus ut numquam minus vel delectus? Dolores modi, facilis quo dignissimos ducimus optio incidunt rerum dolorum unde fuga quaerat, qui nihil error natus itaque facere, non quam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tnihil error natus itaque facere, non quam quidem?'

// ptag.setAttribute('id', 'text')

// document.body.appendChild(ptag)

// document.getElementById('text').style.color = 'blue'
// document.getElementById('text').style.backgroundColor = 'black'
// document.getElementById('text').style.padding = '40px'


var ptag = document.createElement('p')
ptag.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui reiciendis ea debitis tempore quaerat placeat distinctio ipsa assumenda soluta. A quisquam possimus ut numquam minus vel delectus? Dolores modi, facilis quo dignissimos ducimus optio incidunt rerum dolorum unde fuga quaerat, qui nihil error natus itaque facere, non quam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui reiciendis ea debitis tempore quaerat placeat distinctio ipsa assumenda soluta. A quisquam possimus ut numquam minus vel delectus? Dolores modi, facilis quo dignissimos ducimus optio incidunt rerum dolorum unde fuga quaerat, qui nihil error natus itaque facere, non quam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui reiciendis ea debitis tempore quaerat placeat distinctio ipsa assumenda soluta. A quisquam possimus ut numquam minus vel delectus? Dolores modi, facilis quo dignissimos ducimus optio incidunt rerum dolorum unde fuga quaerat, qui nihil error natus itaque facere, non quam quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tnihil error natus itaque facere, non quam quidem?'
ptag.setAttribute('class', 'hello')
document.body.appendChild(ptag)
document.getElementsByClassName('hello')[0].style.color = 'blue'