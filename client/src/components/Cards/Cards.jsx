import React from 'react'

import './Cards.css'
import { Card } from '../card/Card'
export const Cards = ({ allDogs }) => {


    return (
        <div className='ContainerCards'>
            {allDogs.map(dog => (
                <Card key={dog.id} dog={dog} />
            )

            )}
        </div>
    )
}
