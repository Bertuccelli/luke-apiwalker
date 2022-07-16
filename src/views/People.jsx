import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'


const People = () => {
    const {id} = useParams()
    const [person, setPerson] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response =>{
                setPerson(response.data)
            })
            .catch(() => navigate('/Error'))
    }, [id])

    return (
        <div className='people'>
            {
                person&&
                <div>
                    <h1> {person.name} </h1>
                    <p> Birth Year: {person.birth_year} </p>
                    <p> Gender: {person.gender} </p>
                    <p> Height (in cm): {person.height} </p>
                    <p> Mass (in kg): {person.mass} </p>
                </div>
            }

        </div>
    )
}

export default People