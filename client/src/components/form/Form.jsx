import React, { useState } from 'react'
import './Form.css'
import axios from 'axios'
export const Form = () => {

    const [inputValue, setInputValue] = useState({
        name: '',
        height: '',
        weight: '',
        life_span: '',
        temperament: '',
        image: '',
        dog_temperaments: ''
    })

    const inputHandler = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
        })
    }

    const createDog = async (e) => {
        e.preventDefault();
        try {
            const newDog = {
                name: inputValue.name,
                height: inputValue.height,
                weight: inputValue.weight,
                life_span: inputValue.life_span,
                temperament: inputValue.temperament,
                image: inputValue.image,
                dog_temperaments: inputValue.dog_temperaments

            };
            await axios.post('http://localhost:3001/dogs', newDog);
            console.log('Perro creado exitosamente.');
        } catch (error) {
            console.error('Error al crear el perro:', error);
        }
    }
    return (
        <div >
            <form className='Form' onSubmit={createDog}>
                <input onChange={inputHandler} name='name' value={inputValue.name} type="text" placeholder='Border Collie...' />
                <input onChange={inputHandler} name='height' value={inputValue.height} type="text" placeholder='30 - 40cm...' />
                <input onChange={inputHandler} name='weight' value={inputValue.weight} type="text" placeholder='10-20kg...' />
                <input onChange={inputHandler} name='life_span' value={inputValue.life_span} type="text" placeholder='10-15 years...' />
                <input onChange={inputHandler} name='temperament' value={inputValue.temperament} type="text" placeholder='Intelligent...' />
                <input onChange={inputHandler} name='image' value={inputValue.image} type="text" placeholder='Image.jpg...' />
                <input onChange={inputHandler} name='dog_temperaments' value={inputValue.dog_temperaments} type="text" placeholder='Intelligent...' />

                <button type='submit'>Create Dog</button>
            </form>
        </div>
    )
}
