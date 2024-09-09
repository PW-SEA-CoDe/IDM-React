import { useRef } from 'react'
import './Containers.css'



function Sidebar() {

    function Wrapper() {
        let testState = useRef(false)
        const targDiv = useRef(null)

        function updateState() {
            console.log(testState)
            if (testState === false) {
                testState = true
                updateStyle(targDiv, testState)
            } else {
                testState = false
                updateStyle(targDiv, testState)
            }
        }

        function updateStyle(targ, state) {
            console.log(targ.current.classList)
            if (targ && state === true) {
                targ.current.classList.add('clicked')
            } else {
                targ.current.classList.remove('clicked')
            }
        }
        return (
            <>
                <div id='sb-wrapper'>
                    <div id='sb-header'>
                        <div id='test-button' ref={targDiv} onClick={updateState}></div>
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