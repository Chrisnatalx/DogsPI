import React from 'react'

import './Cards.css'
import { Card } from '../card/Card'
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
