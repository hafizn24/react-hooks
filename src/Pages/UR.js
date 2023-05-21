import React, { useReducer, useRef } from 'react'

function UR() {
    const [number, setNumber] = useReducer(
        (number, newNumber) => (number + newNumber), 0
    )

    const [checked, toggle] = useReducer(
        ((checked) => !checked),
        false
    )

    const intialState = {
        message: "hi"
    }
    function reducer(state, action) {
        switch (action.type) {
            case "yell":
                return {
                    message: `HELLO ${state.message}`
                }
            case "whisper":
                return {
                    message: "sorry"
                }
        }
    }
    const [state, dispatch] = useReducer(
        reducer,
        intialState
    )

    const color = useRef()

    const submit = (e) =>{
        e.preventDefault()
        const colorVal = color.current.value
        alert(colorVal)
        color.current.value = ""
    }

    return (
        <>
            <center><h1 onClick={() => setNumber(1)}>{number}</h1></center>
            <input
                type="checkbox"
                value={checked}
                onChange={toggle}
            />
            {checked ? "checked" : "not checked"}
            <br />
            <p>Message: {state.message}</p>
            <button onClick={() => dispatch({ type: "yell" })}>Yell</button>
            <button onClick={() => dispatch({ type: "whisper" })}>Whisper</button>
            <br />
            <form onSubmit={submit}>
                <input type="color" ref={color} />
                <button>Add</button>
            </form>
        </>
    )
}

export default UR