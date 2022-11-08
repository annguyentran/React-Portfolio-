import React from 'react';
const frontend =
{
    skillOne: 'HTML',
    skillTwo: 'CSS',
    skillThree: 'JavaScript',
    skillFour: 'React',
    skillFive: 'jQuery',
    skillSix: 'Progressive Web Application (PWA)'

}
const Backend = {
    skillOne: 'node.JS',
    skillTwo: 'MySQL',
    skillThree: 'MongoDB',
    skillFour: 'Express JS'
}



function Resume() {
    return (
        <div className='container'>
            <a href='../Downloadable/Website-Development-Resume.pdf' download='Resume'>My Resume</a>
            <div>
                <ul className='list-group'>
                    <h3 className='m-3'>Frontend Skills</h3>
                    <li className='list-group-item'>{frontend.skillOne}
                    </li>
                    <li className='list-group-item'>{frontend.skillTwo}
                    </li>
                    <li className='list-group-item'>{frontend.skillThree}
                    </li>
                    <li className='list-group-item'>{frontend.skillFour}
                    </li>
                    <li className='list-group-item'>{frontend.skillFive}
                    </li>
                    <li className='list-group-item'>{frontend.skillSix}
                    </li>
                    <h4 className='m-3'>Backend Skills</h4>
                    <li className='list-group-item'>{Backend.skillOne}
                    </li>
                    <li className='list-group-item'>{Backend.skillTwo}
                    </li>
                    <li className='list-group-item'>{Backend.skillThree}
                    </li>
                    <li className='list-group-item'>{Backend.skillFour}</li>

                </ul>
            </div>
        </div>


    )
}

export default Resume;