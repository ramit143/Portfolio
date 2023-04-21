import { Link } from 'react-router-dom';
import './AboutContent.css';
import react1 from '../assets/react1.webp';
import react2 from '../assets/react2.png';
import react3 from '../assets/react3.jpg'



export function AboutContent () {
    return(
        <div className='about'>
            <div className='left'>
                 <h1>Who Am I?</h1>
                 <p>I'm a React FrontEnd-Developer. I create
                    responsive secure website for my clients.
                 </p>
                 <Link to="/contact">
                    <button className='btn'>Contact</button>
                 </Link>
            </div>
            <div className='right'>
               <div className='img-container'>
                  <div className='img-stack top'>

                    <img src={react1} className='img' alt='true'/>

                  </div>
                  <div className='img-stack bottom'>

                    <img src={react3} className='img' alt='true'/>

               </div>
               </div>
            </div>
        </div>
    )
}