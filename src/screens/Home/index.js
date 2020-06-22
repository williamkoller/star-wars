import React, { useState, useEffect } from 'react'
import { doGet } from '../../helpers/ApiHelper'
const Home = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        doGet('/people').then(response => setPeople(response))

    }, [])

    console.log(people)
    return <h1>Home</h1>
}

export default Home