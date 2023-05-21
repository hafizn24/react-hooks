import React, { useState } from 'react'
import StarIcon from '@mui/icons-material/Star';

const createArray = (length) => [
    ...Array(length)
]

function Star({ selected = false, onSelect }) {
    return (
        <StarIcon
            style={{ color: selected ? "gold" : "grey" }}
            onClick={onSelect} />
    )
}

function StarRating({ totalStars = 5 }) {
    const [selectedStars, setSelectedStars] = useState(0)
    return createArray(totalStars).map((n, i) => (
        <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => setSelectedStars(i + 1)} />
    ))
}


function US() {
    const [status, setStatus] = useState('Not Delivered')
    const [checked, setCheck] = useState(false)


    return (
        <>
            <center><h1>useState</h1></center>
            <h2>The package is: {status}</h2>
            <button onClick={() => {
                setStatus('Delivered')
            }}>Deliver</button>
            <br />
            <input
                type="checkbox"
                value={checked}
                onChange={() => {
                    setCheck(!checked)
                }} />
            <p>{checked ? "Checked" : "Not Checked"}</p>
            <br />
            <StarRating totalStars={5} />
        </>
    )
}

export default US