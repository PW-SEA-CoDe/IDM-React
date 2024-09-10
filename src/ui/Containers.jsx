import { useRef } from 'react'
import './Containers.css'



function Sidebar({children}) {

    function Wrapper() {
        let testState = useRef(false).current
        const targDiv = useRef(null)
        const wrapperBody = useRef(null)

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
                        <div id='toggle'>✕</div>
                        <div id='test-button' ref={targDiv} onClick={updateState}></div>
                    </div>
                    <div id='sb-body' ref={wrapperBody}>
                        {children}
                    </div>
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