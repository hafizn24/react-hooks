import React, { useEffect, useState } from 'react'

function UE() {
    const [name, setName] = useState('foo')
    useEffect(() => {
        document.title = name
    }, [name])
    // 
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://api.github.com/users`)
            .then(response => response.json())
            .then(setData)
    }, [])

    return (
        <>
            <center>
                <h1>useEffect</h1>
                <p>Hello {name}</p>
                <button
                    onClick={() => {
                        setName('boo')
                    }}
                >
                    Change boo
                </button>
                <br />
            </center>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>{user.login}</li>
                ))}
            </ul>
            <button
                onClick={() => setData([])}
            >Clear
            </button>
        </>
    )
}

export default UE