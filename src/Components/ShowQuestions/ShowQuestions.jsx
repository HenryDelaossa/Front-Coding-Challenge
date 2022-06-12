import './showQuestions.css'
export const ShowQuestions = ({ data, indexData, handleAnswer }) => {
    return (
        <div className='containerCardQuestions'>
            <h1>{data[indexData].category}</h1>
            <div className='containerQuestion'>
                <div className='divQuestion'>
                    <p>
                        {data[indexData].question}
                    </p>
                </div>
                <div className='divQuestionActual'>
                    <p>{`${indexData + 1} de ${data.length}`}</p>
                </div>
            </div>
            <div className='containerBtnTrueFalse'>
                <button
                    onMouseDown={(e) => handleAnswer(e, data[indexData].correct_answer)}
                    value={'True'}
                >
                    True
                </button>
                <button
                    onMouseDown={(e) => handleAnswer(e, data[indexData].incorrect_answers[0])}
                    value={'False'}
                >
                    False
                </button>
            </div>
        </div>
    )
}
