import React from 'react'
import { LandingPage } from '../components/LandingPage/LandingPage'
import './WelcomeView.css'
export const WelcomeView = () => {
    return (
        <div className='container-wel'>
            <div className='card-wel'>
                <LandingPage />
            </div>
        </div>
    )
}
