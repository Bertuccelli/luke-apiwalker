import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'


const Planets = () => {
    const {id} = useParams()
    const [planets, setPlanets] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response =>{setPlanets(response.data)})
            .catch(() => navigate('/Error'))
    }, [id])


    return (
        <div className='planets'>
            {
                planets&&
                <div>
                    <h1> {planets.name} </h1>
                    <p> Terrain: {planets.terrain} </p>
                    <p> Climate: {planets.climate} </p>
                    <p> Gravity: {planets.gravity} </p>
                    <p> Population: {planets.population} </p>
                </div>
            }
        </div>
    )
}

export default Planets