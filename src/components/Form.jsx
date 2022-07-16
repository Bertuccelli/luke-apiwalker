import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Form = () => {
    const options = [
        'people',
        'planets'
    ]

    const[category, setCategory] = useState(options[0])
    const [id, setId] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/${category}/${id}`)
    }


    return (
        <div className='searchBar'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Search For: </label>
                    <select value={category} onChange={e=>setCategory(e.target.value)}>
                        {options.map((categories, idx) =>
                            <option key={idx} value={categories}>{categories}</option>
                        )}
                    </select>
                    <label className='idSearch'>Id:</label>
                    <input type="number" name="id" value={id} onChange={e=>setId(e.target.value)} />
                </div>
                <div>
                    <button type='submit'>Search</button>
                </div>

            </form>
        </div>
    )
}

export default Form