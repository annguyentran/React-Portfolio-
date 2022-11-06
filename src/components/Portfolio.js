import React from 'react';
import ProjectCard from './ProjectCard';
import WeatherAPI from '../images/Weather-Screenshot.png';
import PasswordScreenShot from '../images/Password-Generator-Screenshot.png'
import Planner from '../images/Work-Day-Screenshot.png'
import MovieSearcher from '../images/movie-search-app-screenshot.png'
import NoteTaker from '../images/NOTE-TAKER-START.png'
import Pokedex from '../images/Pokedex-Screenshot.png'

function Portfolio(){
const projects = [
    {
        title: 'Weather Forcast',
        description:'A weather application that uses a weather API to determine the weather for a the city that the user inputs for the next 5 days.',
        image: WeatherAPI,
        deployedLink: '',
        codeLink:'',
        id: 1
    },
    {
        title: 'Password Generator',
        description:'A password generator that will generate a new password for the user and the user is able to customize the length and the characters used in the password',
        image: PasswordScreenShot,
        deployedLink: '',
        codeLink:'',
        id: 2

    },
    {
        title: 'Planner',
        description:'The user is able to write notes in the timebox to plan out their day. The timeboxes will be colored differently depending on the time of day.',
        image: Planner,
        deployedLink: '',
        codeLink:'',
        id: 3

    },
    {
        title: 'Movie Searcher',
        description:'This application uses a movie API to search for movies. The user is able to type a movie and and then a description, picture and streaming information will be presented to the user.',
        image: MovieSearcher,
        deployedLink: '',
        codeLink:'',
        id: 4

    },
    {
        title: 'Note Taker',
        description:'The application uses express and is able to save whatever notes the user types. The user can keep on adding new sections to type notes.',
        image: NoteTaker,
        deployedLink: '',
        codeLink:'',
        id: 5

    },
    {
        title: 'Pokedex',
        description:'This application resembles the poxedex shown in the tv show pokemon. The user is able to create an account with their name, email and password. Once created, 6 random pokemon from the original series will be generated for them from a pokemon npm package. They are able to see the names and the description.',
        image: Pokedex,
        deployedLink: '',
        codeLink:'',
        id: 6

    },
    
]



    return(
        <div>
            <h2>This is my work</h2>
            <div>
                {projects.map(project => (
                    <ProjectCard key={project.id}title={project.title}description={project.description}image={project.image}/>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;