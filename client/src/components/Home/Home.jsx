import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Cards } from '../cards/Cards'
import { Pagination } from '../pagination/Pagination'
import { filterTemperament, getAllDogs, orderDogsByName, orderDogsByWeight, reset } from '../../redux/actions/action'

import axios from 'axios'
import './Home.css'

export const Home = () => {
    const [page, setPage] = useState(0);
    const [name, setName] = useState('');
    const [temperament, setTemperament] = useState([]);
    const [searchTimeout, setSearchTimeout] = useState(null);

    const dispatch = useDispatch();
    const allDogs = useSelector(state => state.allDogs);

    function sortHandler(e) {
        dispatch(orderDogsByName(e.target.value));
    }

    const sortByWeight = (e) => {
        dispatch(orderDogsByWeight(e.target.value));
    }

    const handlerChange = (e) => {
        //guardamos en una variable el e.target.value para que no se bugge
        const inputValue = e.target.value;
        setName(inputValue);

        // Cancela el temporizador anterior y configura uno nuevo
        clearTimeout(searchTimeout);
        setSearchTimeout(setTimeout(() => dispatch(getAllDogs(inputValue, page)), 300));
    }

    const filterChange = (e) => {
        dispatch(filterTemperament(e.target.value));
    }

    const getTemperaments = async () => {
        const { data } = await axios.get('http://localhost:3001/dogs/temperaments');
        setTemperament(data);
    }

    const resetFilter = () => {
        dispatch(reset());
    }

    useEffect(() => {
        dispatch(getAllDogs(name, page));
        getTemperaments();
    }, [dispatch, name, page]);
    return (
        <>
            <div className='input' >
                <input type="text" placeholder='Bulldog...' onChange={handlerChange} value={name} />
            </div>
            <br />
            <br />
            <br />
            <select placeholder="Sort" onChange={sortHandler}>
                {["Ascendente", "Descendente"].map((order) => (
                    <option key={order} value={order}>
                        {order}
                    </option>
                ))}
            </select>
            <select placeholder="Sort" onChange={sortByWeight}>
                {["LowerWeight", "maxWeight"].map((order) => (
                    <option key={order} value={order}>
                        {order}
                    </option>
                ))}
            </select>

            <select placeholder='Filter' onChange={filterChange}>
                {temperament.map((temp) => (
                    <option key={temp} value={temp} >{temp}</option>
                ))}

            </select>
            <button onClick={resetFilter}>Reset</button>

            <Cards allDogs={allDogs} />
            <Pagination page={page} setPage={setPage} />
        </>
    )
}
