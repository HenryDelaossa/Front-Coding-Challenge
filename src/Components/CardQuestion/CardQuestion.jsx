import { useState } from "react"
// cpmponents
import { ShowScore } from '../ShowScore/ShowScore'
import { ShowQuestions } from '../ShowQuestions/ShowQuestions'


export const CardQuestion = ({ greet }) => {

    const [numQuest, setNumQuest] = useState(0)
    const [showScore, setShowScore] = useState(false)

    /**
     * When the user clicks on element, the value of is assigned to the myResp
     * property of the object in the greet array at the index of the current question number, and the
     * question number is incremented by one.
     */
    const handleAnswersTypeBoolean = (e) => {

        Object.assign(greet[numQuest], { myResp: e.target.value });
        setNumQuest(numQuest + 1);
        if (numQuest === greet.length - 1)
            setShowScore(true);

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
