import './HeroImage.css';
import IntroImg from "../assets/introImg1.jpg"
import { Link } from 'react-router-dom';
export function HeroImage () {
    return(
        <div className='hero'>
            <div className='mask'>
                <img className='into-img' src={IntroImg} alt='IntroImg' />

            </div>
            <div className='content'>
                 <p>HI, I'M RAMIT SAHANI</p>
                 <h1>React Developer</h1>
                 <div>
                    <Link to="/project" className='btn'>Projects</Link>
                    <Link to="/contact" className='btn btn-light'>Contact</Link>

                 </div>
            </div>

        </div>
    )
}