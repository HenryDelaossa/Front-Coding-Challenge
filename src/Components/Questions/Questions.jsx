import { useEffect, useState } from "react";
// api
import apiTrivia from "../../api/triviaApi/apiTrivia";
// components
import { CardQuestion } from "../CardQuestion/CardQuestion";
import { Loader } from '../Loader/Loader';
// help
import { amountQuestions, difficultHard } from "../../helpers";



export const Questions = () => {

    const [load, setLoad] = useState(true)
    const [data, setData] = useState([{}])

    const getData = async () => {
        const { data } = await apiTrivia.get(`/api.php?amount=${amountQuestions}&difficulty=${difficultHard}&type=boolean`);
        setLoad(false)
        setData(data.results)
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <>
            {load ?
                <Loader />
                :
                data &&
                <CardQuestion greet={data} />
            }
        </>
    )
}
