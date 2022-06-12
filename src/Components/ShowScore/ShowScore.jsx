import './showScore.css'
// components
import { CustomButtonLink } from '../ButtonLink/CustomButtonLink'


export const ShowScore = ({ data }) => {
    const score = data.filter((res) => res.myResp === res.correct_answer).length
    return (
        <div className='containerScore'>
            <div className='containerYouScoredText'>
                <h3>You scored</h3>
                <p>{score} / {data.length} </p>
                <strong>{`${((score / data.length) * 100).toFixed(0)}%`}</strong>
            </div>
            <div className='containerQuestionsRespToScore'>
                <div className='containerUlListQuestionsRespToScore' >
                    <ul className='ulListQuestionsRespToScore'>
                        {data && data.map((ans, i) =>
                            <li
                                key={i}
                                className={ans.myResp === ans.correct_answer ? 'correctResp' : 'incorrectResp'}
                            >
                                {ans.question}</li>
                        )}
                    </ul>
                </div>
            </div>
            <CustomButtonLink href={'/'} text='play again?' />
        </div>
    )
}
