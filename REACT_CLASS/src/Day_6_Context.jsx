import React, { useContext } from 'react'
import { myContext } from './ContextProvider'

const Day_6_Context = () => {

    const { input, display, sumFun, allClear, deleteFun } = useContext(myContext)

    return (
        <>
            <div>
                <input type="text" value={input} readOnly />
            </div>
            <div>
                <input type="button" onClick={display} value='1'/>
                <input type="button" onClick={display} value='2' />
                <input type="button" onClick={display} value='3' />
                <input type="button" onClick={display} value='4' />
            </div>
            <div>
                <input type="button" onClick={display} value='5' />
                <input type="button" onClick={display} value='6' />
                <input type="button" onClick={display} value='7' />
                <input type="button" onClick={display} value='8' />
            </div>
            <div>
                <input type="button" onClick={display} value='9' />
                <input type="button" onClick={display} value='0' />
                <input type="button" onClick={display} value='00' />
                <input type="button" onClick={display} value='.' />
            </div>
            <div>
                <input type="button" onClick={display} value='+' />
                <input type="button" onClick={display} value='-' />
                <input type="button" onClick={display} value='*' />
                <input type="button" onClick={display} value='/' />
            </div>
            <div>
                <input type="button" value='=' onClick={sumFun} />
                <input type="button" value='AC' onClick={allClear} />
                <input type="button" value='DE' onClick={deleteFun}/>
            </div>
        </>
    )
}

export default Day_6_Context