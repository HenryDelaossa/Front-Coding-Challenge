import axios from "axios";
import { apiTriviaUrlBase } from "../URLs";

const apiTrivia = axios.create({ baseURL: apiTriviaUrlBase })

export default apiTrivia