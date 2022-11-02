import React from 'react'
import philProfile from '../assets/philNelsonProfileUkraine.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faEnvelope} />

export default function Profile(){
    return (
        <div className="profile-wrapper">
            <a href="https://github.com/philNelson-jpn" target="_blank">
                <img src={philProfile} className="profile-pic" alt="Phil Nelson" />
            </a>
        <h1>Phil Nelson</h1>
        <h3>Frontend Developer</h3>
        <a href="https://github.com/philNelson-jpn" target="_blank">phil.nelson
            </a>
        <div className="card">
            <a href="mailto:nelsonpa@miamioh.edu?" subject="Hey, Phil. Heard you were pretty rad."><button><span className="envelope">{element}</span> Email</button></a>
        </div>
      </div>
    )
}