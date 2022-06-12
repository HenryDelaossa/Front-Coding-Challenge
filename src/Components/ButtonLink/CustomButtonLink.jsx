import './customButtonLink.css'
import { Link } from 'react-router-dom'

export const CustomButtonLink = ({ text, href }) => {
    return (
        <div className='containerBtnPlayAgain'>
            <Link to={href}><button className='btnBegin'>{text ? text : 'boton'}</button></Link>
        </div>
    )
}
