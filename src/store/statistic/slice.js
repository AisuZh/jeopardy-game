// const initialState = {
//     userName: '',
//     totalQuestion: 0,
//     correctAnswers: 0,
//     incorrectAnswers: 0,
//     correctAnswers: 0,
//     totalScore: 0
// }

// const statisticReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'SET_USERNAME':
//             return { ...state, userName: action.payload };
//         case 'SET_TOTAL_QUESTION':
//             return { ...state, totalQuestion: action.payload };
//         case 'SET_CORRECT_ANSWERS':
//             return { ...state, correctAnswers: action.payload };
//         case 'SET_INCORRECT_ANSWERS':
//             return { ...state, incorrectAnswers: action.payload };
//         case 'SET_TOTAL_SCORE':
//             return { ...state, totalScore: action.payload };
//         default:
//             return state;

//     }

// }

// export default statisticReducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: '',
    totalQuestion: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    totalScore: 0
}

const statisticSlice = createSlice({
    name: 'statistic',
    initialState,
    reducers: {
        setUserName(state, {payload}) {
            state.userName = payload
        },
        setTotalQuestion(state, {payload}) {
            state.totalQuestion = payload
        },
        setCorrectAnswers(state, {payload}) {
            state.correctAnswers = payload
        },
        setIncorrectAnswers(state, {payload}) {
            state.incorrectAnswers = payload
        },
        setTotalScore(state, {payload}) {
            state.totalScore = payload
        },
    }
})

export const { actions } = statisticSlice;

export default statisticSlice.reducer



