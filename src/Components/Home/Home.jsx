import './Home.css'
import { CustomButtonLink } from '../ButtonLink/CustomButtonLink'

export const Home = () => {
    return (
        <div className='home'>
            <div className='container'>
                <h2 className='tittle'>Welcome to the
                    Trivia Challenge!</h2>

                <p className='info'>You will be presented
                    with 10 True or False
                    questions.</p>

                <p className='canScore'>Can you score 100%?</p>
                <CustomButtonLink href='quiz' text='begin' />
            </div>
        </div>
    )
}
