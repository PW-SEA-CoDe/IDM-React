import { useRef } from 'react'
import './Components.css'

export function Button() {
    let button = useRef(null)

    return (
        <>
            <div className='button' ref={button}>Hello World!</div>
        </>
    )
}
