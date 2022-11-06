import React from 'react';

function ProjectCard(props){
    const dimensions = {width: '100%', height: '100%'}

    return(
        <div className='card col-sm-4' >
            <img className="card-img-top" style={dimensions}alt="" src={props.image}></img>
            <div className='card-body'>
            <h3 className='card-title'>{props.title}</h3>
            <h4 className='card-text'>{props.description}</h4>
            </div>
        </div>
    )
}
export default ProjectCard;