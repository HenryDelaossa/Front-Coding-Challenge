import { useState } from "react"
// cpmponents
import { ShowScore } from '../ShowScore/ShowScore'
import { ShowQuestions } from '../ShowQuestions/ShowQuestions'


export const CardQuestion = ({ greet }) => {


    const [numQuest, setNumQuest] = useState(0)
    const [showScore, setShowScore] = useState(false)

    /**
     * Si la respuesta del usuario es correcta, o incorrecta entonces asigna la respuesta del usuario a la propiedad myResp del objeto.
     */
    const handleAnswersTypeBoolean = (e, answer) => {

        if (e.target.value === answer) {
            Object.assign(greet[numQuest], { myResp: e.target.value })
        } else {
            Object.assign(greet[numQuest], { myResp: e.target.value })
        }
        setNumQuest(numQuest + 1)
        if (numQuest === greet.length - 1) {
            setShowScore(true)
        }
    }

    return (
        <>
            {!showScore ?
                <ShowQuestions data={greet} indexData={numQuest} handleAnswer={handleAnswersTypeBoolean} />
                :
                showScore &&
                <ShowScore data={greet} />
            }
        </>
    )
}
