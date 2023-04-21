import './WorkCard.css'
import women from '../assets/women-fashion1.png'
import { NavLink } from 'react-router-dom'

export function WorkCard (props) {
    return(
        <div className='project-card'>
                    <img src={props.imgsrc} alt="image"/>
                    <h2 className='project-title'>{props.title}</h2>
                     <div className='pro-details'>
                        <p>{props.text}</p>
                        <div className='pro-btns'>
                           <NavLink to={props.view} className="btn">View</NavLink>
                           <NavLink to="" className="btn">Source</NavLink>
                        </div>
                     </div>

                </div>

    )
}