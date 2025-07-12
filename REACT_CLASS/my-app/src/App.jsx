import React from 'react'
// import Day1_Components from './Day1_Components'
// import Day2_JS from './Day2_JS'
// import Day3_CSS from './Day3_CSS'
// import Day3_Props1 from './Day3_Props1'
// import Day4_State1 from './Day4_State1'
// import Day5_State2 from './Day5_State2'
// import Day5_Bootstrap from './Day5_Bootstrap'
// import Day6_Context1 from './Day6_Context1'
// import Day6_Context2 from './Day6_Context2'
// import Day7_Effect from './Day7_Effect'
// import Day7_Reducer from './Day7_Reducer'
// import Day8_Ref from './Day8_Ref'

// import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import Home from './Pages/Home'
// import About from './Pages/About'
// import Contact from './Pages/Contact'
// import Error from './Pages/Error'
// import Navbar from './Pages/Navbar'
// import Shop from './Pages/Shop'

// import Day9_CRUD from './Day9_CRUD'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Form from './Form_Validation/Form'
import FormSubmit from './Form_Validation/FormSubmit'
import Home from './Form_Validation/Home'
import About from './Form_Validation/About'
import Context from './Form_Validation/Context'

function App(){
  return(
    <>
      {/* <Day1_Components /> */}

      {/* <Day2_JS /> */}

      {/* <Day3_CSS /> */}
      {/* <Day3_Props1 /> */}

      {/* <Day4_State1 /> */}

      {/* <Day5_State2 /> */}
      {/* <Day5_Bootstrap /> */}

      {/* <Day6_Context2>
        <Day6_Context1 />
      </Day6_Context2> */}

      {/* <Day7_Effect /> */}
      {/* <Day7_Reducer /> */}

      {/* <Day8_Ref /> */}

      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='/shop/:id' element={<Shop />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter> */}

      {/* <Day9_CRUD /> */}

      <BrowserRouter>
        <Context>
          <Routes>
            <Route path='/' element={<Form />} />
            <Route path='/submit' element={<FormSubmit />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Context>
      </BrowserRouter>

    </>
  )
}

export default App 