import React from 'react';

function ProjectCard(props){
    const dimensions = {width: '100%', height: '100%'}
    const border = {border: '1px solid black',
margin: '10px', width:'500px'}

    return(
        <div className='card' style={border}>
            <a href={props.deployedLink}><img className="card-img-top " style={dimensions}alt="" src={props.image}></img></a>
            <div className='card-body'>
            <h3 className='card-title'>{props.title}</h3>
            <h4 className='card-text'>{props.description}</h4>
            </div>
        </div>
    )
}
export default ProjectCard;