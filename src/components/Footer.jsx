import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareTwitter, faGoogle, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

const twitter = <FontAwesomeIcon icon={faSquareTwitter} />
const google = <FontAwesomeIcon icon={faGoogle} />
const github = <FontAwesomeIcon icon={faSquareGithub} />

export default function Footer(){

    return (
        <div className="footer-wrapper">
            <div className="footer-icons">
                <a className="footer-icon" href="https://twitter.com/_philNelson" target="_blank">{twitter}</a>
                <a className="footer-icon" href="mailto:nelsonpa@miamioh.edu?" subject="Hey, Phil. Heard you were pretty rad.">{google}</a>
                <a className="footer-icon" href="https://github.com/philNelson-jpn" target="_blank">{github}</a>
            </div>
        </div>
    )
}