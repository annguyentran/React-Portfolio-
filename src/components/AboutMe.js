import React from 'react';
import profilepic from '../images/logo192.png'

function AboutMe() {
    const aboutMe = 'About Me'
    const description = "My name is Andrew Nguyen-Tran. I am currently working on web development.I have graduated from the University of California, San Diego with a Human Developmental Science and Japanese Studies degree.Please feel free to view the projects I have done so far and contact me should there be any questions you may have."
    
            
    return (
        <div id='aboutMe'className='container'>
            <p className="display-5 fw-bold text-center">{aboutMe}</p>
            <img className="d-block mx-auto mb-4" alt='This is a profile pic'src={profilepic} width='100'height='100'></img>
            <p className="col-lg-6 mx-auto lead mb-4">{description}</p>
        </div>
    )

    
                       
}

export default AboutMe