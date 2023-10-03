import React from 'react'
import { Card } from '../Card/Card'
import './Cards.css'
export const Cards = ({ dogs }) => {


    return (
        <div className='ContainerCards'>
            {dogs.map(dog => (
                <Card key={dog.id} dog={dog} />
            )

            )}
        </div>
    )
}
