import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { doGet, getIdFromUrl } from '../../helpers/ApiHelper'
import { Container, List } from './styles'

const Home = () => {
    
    const [people, setPeople] = useState([])

    useEffect(() => {
        doGet('/people').then(response => setPeople(response.results))

    }, [])

    if(!people || !people.length) {
        return <h1>Loading...</h1>
    }

    const peopleList = people.map(p => {
        const id = getIdFromUrl(p.url)
        return (
            <Container key={p.url}>
                <List>
                    
                    <Link 
                    to={`/detail/${id}`}
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >
                        {p.name}
                    </Link>
                    
                </List>
        
            </Container>
         )}
    )

    console.log(people)
    return (
        <List>
            <h1>Charecters</h1>
            <h1>{peopleList}</h1>
        </List>
       
    )
}

export default Home