import React, { useState } from 'react'
import './Form.css'
import axios from 'axios'
import { validar } from '../../helpers/validar'
export const UpdateDog = () => {

    const [inputValue, setInputValue] = useState({
        id: '',
        name: '',
        minHeight: '',
        maxHeight: '',
        minWeight: '',
        maxWeight: '',
        life_span: '',
        temperament: '',
        image: '',
        dog_temperaments: ''
    })
    const [error, seterror] = useState({
        id: 'You must complete this field with an available id',
        name: 'The name must be between 4 and 25 letters',
        minHeight: 'Height must be greater than 0',
        maxHeight: 'The height must be less than 55',
        minWeight: 'Weight must be greater than 0',
        maxWeight: 'The weight must be less than 50',
        life_span: 'You must complete this field',
        temperament: 'You must complete this field',
        image: '',
        dog_temperaments: 'You must complete this field'
    })

    const inputHandler = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
        })

        seterror(validar({
            ...inputValue,
            [e.target.name]: e.target.value,
        }))
    }

    const disabledHandler = () => {
        return Object.values(error).some(Boolean);
    }

    const updateDog = async (e) => {
        e.preventDefault();
        try {
            const Dogupdated = {
                id: inputValue.id,
                name: inputValue.name,
                minHeight: inputValue.minHeight,
                maxHeight: inputValue.maxHeight,
                minWeight: inputValue.minWeight,
                maxWeight: inputValue.maxWeight,
                life_span: inputValue.life_span,
                temperament: inputValue.temperament,
                image: inputValue.image,
                dog_temperaments: inputValue.dog_temperaments

            };
            await axios.put('http://localhost:3001/dogs', Dogupdated);
            alert('Perro actualizado exitosamente')
        } catch (error) {
            console.error('Error al actualizar el perro:', error);
        }

    }

    return (
        <div>
            <form className='Form' onSubmit={updateDog}>
                <input onChange={inputHandler} name='id' value={inputValue.id} type="text" placeholder='9ef43448-324f-46e7-9336-d497825d60fa ...' />
                {error.id && <span style={{ color: 'red' }}>{error.id}</span>}

                <input onChange={inputHandler} name='name' value={inputValue.name} type="text" placeholder='Border Collie...' />
                {error.name && <span style={{ color: 'red' }}>{error.name}</span>}

                <input onChange={inputHandler} name='minHeight' value={inputValue.minHeight} type="text" placeholder='minHeight' />
                {error.minHeight && <span style={{ color: 'red' }}>{error.minHeight}</span>}

                <input onChange={inputHandler} name='maxHeight' value={inputValue.maxHeight} type="text" placeholder='maxHeight' />
                {error.maxHeight && <span style={{ color: 'red' }}>{error.maxHeight}</span>}

                <input onChange={inputHandler} name='minWeight' value={inputValue.minWeight} type="text" placeholder='minWeight' />
                {error.minWeight && <span style={{ color: 'red' }}>{error.minWeight}</span>}

                <input onChange={inputHandler} name='maxWeight' value={inputValue.maxWeight} type="text" placeholder='maxWeight' />
                {error.maxWeight && <span style={{ color: 'red' }}>{error.maxWeight}</span>}

                <input onChange={inputHandler} name='life_span' value={inputValue.life_span} type="text" placeholder='10-15 years...' />
                {error.life_span && <span style={{ color: 'red' }}>{error.life_span}</span>}

                <input onChange={inputHandler} name='temperament' value={inputValue.temperament} type="text" placeholder='Intelligent...' />
                {error.temperament && <span style={{ color: 'red' }}>{error.temperament}</span>}

                <input onChange={inputHandler} name='image' value={inputValue.image} type="text" placeholder='Image.jpg...' />

                <input onChange={inputHandler} name='dog_temperaments' value={inputValue.dog_temperaments} type="text" placeholder='Intelligent...' />
                {error.dog_temperaments && <span style={{ color: 'red' }}>{error.dog_temperaments}</span>}

                <button type='submit' disabled={disabledHandler()} >Update Dog</button>
            </form>
        </div>
    )
}
