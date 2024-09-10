import { useEffect, useRef } from 'react'
import './Components.css'

export function Button() {
    let button = useRef(null)
    useEffect(() => {
        const updatedWidth = () => {
            if (button.current) {
                console.log(button.current.parentNode.style.offsetWidth)
                const computedWidth = button.current.parentNode.style.offsetWidth
                console.log(computedWidth)
            }
        }
        updatedWidth();
    })
    return (
        <>
            <div className='button' ref={button}>Hello World!</div>
        </>
    )
}
