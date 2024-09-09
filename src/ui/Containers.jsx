import { useState } from 'react'
import './Containers.css'



function Sidebar() {

    function Wrapper() {
        let testState = useState(false)

        function updateState() {
            console.log(testState)
            if (testState === false) {
                testState = true
            } else {
                testState = false
            }
            console.log(testState)
        }
        return (
            <>
                <div id='sb-wrapper'>
                    <div id='sb-header'>
                        <div id='test-button' onClick={updateState}></div>
                    </div>
                    <div id='sb-body'></div>
                    <div id='sb-footer'></div>
                </div>
            </>
        )
    }

    return (
        <>
            <Wrapper />
        </>
    )
}

export default Sidebar