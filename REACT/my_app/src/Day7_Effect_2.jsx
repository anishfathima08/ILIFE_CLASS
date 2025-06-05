
// import React, { useState, useEffect } from 'react'

// const Day7_Effect_2 = () => {

//     var [ input, setInput ] = useState('')
//     var [ weather, setWeather ] = useState('')

//     var API_KEY = 'd4a760bc6e759aaa4958a53637de149b'

//     const fetchWeatherData = async () => {
//         var url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`)
//         var data = await url.json();
//         setWeather(data)
//     }

//     useEffect(() => {
//         fetchWeatherData()
//     }, [input])

//     return (
//         <>
//             <input type="text" onChange={(e) => {setInput(e.target.value)}}/>

             
//             { input === '' ? '' :
//                 ( weather && weather.main ) ? 
//                     <>
//                         <h1>{weather.name}</h1>
//                         <h1>Temperature : {weather.main.temp} ° C</h1>
//                     </>
//                     : 
//                     <div>
//                         <h1>No Data Found</h1>
//                     </div>
//             }
//         </>
//     )
// }

// export default Day7_Effect_2