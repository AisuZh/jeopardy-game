import { combineReducers } from "redux"

import statistic from "./statistic/slice"
import board from "./board/slice"

const reducers= combineReducers({
    statistic,
    board,
})

export default reducers