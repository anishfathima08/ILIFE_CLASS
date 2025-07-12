import React from 'react'
// import Swiper_Package from './Swiper_Package'
// import Asset from './Asset.jsx'
// import Day1_Components from './Day1_Components.jsx'
// import Day2_JS from './Day2_JS.jsx'
// import Day3_Props_1 from './Day3_Props_1.jsx'
// import Day4_State_1 from './Day4_State_1.jsx'
// import Day5_State_2 from './Day5_State_2.jsx'
// import Bootstrap from './Bootstrap.jsx'
// import Day6_Effect_1 from './Day6_Effect_1.jsx'
// import Day7_Effect_2 from './Day7_Effect_2.jsx'
// import Day8_Reducer from './Day8_Reducer.jsx'
// import Day9_Ref from './Day9_Ref.jsx'
// import Day10_Context from './Day10_Context.jsx'
// import Day10_Context_1 from './Day10_Context_1.jsx'
// import Day10_Context_2 from './Day10_Context_2.jsx'
// import Router from './Router'
// import Crud from './Crud.jsx'

import Routers from './Form/Routers.jsx'
import Context from './Form/Context.jsx'
import { BrowserRouter } from 'react-router-dom'

// import Aos_Package from './Aos_Package.jsx'

// import Swiper_Package from './Swiper_Package'

const App = () => {
  return (
    <>
      {/* <Asset /> */}

      {/* <Day1_Components /> */}

      {/* <Day2_JS /> */}

      {/* <Day3_Props_1 /> */}

      {/* <Day4_State_1 /> */}

      {/* <Day5_State_2 /> */}

      {/* <Bootstrap /> */}

      {/* <Day6_Effect_1 /> */}

      {/* <Day7_Effect_2 /> */}

      {/* <Day8_Reducer /> */}

      {/* <Day9_Ref /> */}

      {/* <Day10_Context>
        <Day10_Context_1/>
        <Day10_Context_2 />
      </Day10_Context> */}

      {/* <Router /> */}

      {/* <Crud /> */}
      
      <BrowserRouter>
        <Context>
          <Routers />
        </Context>
      </BrowserRouter>

      {/* <Aos_Package /> */}

      {/* <Swiper_Package /> */}

    </>
  )
}

export default App