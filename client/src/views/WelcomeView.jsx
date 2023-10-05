import React from 'react'

import './WelcomeView.css'
import { LandingPage } from '../components/ladingpage/LandingPage'
export const WelcomeView = () => {
    return (
        <div className='container-wel'>
            <div className='card-wel'>
                <LandingPage />
            </div>
        </div>
    )
}
