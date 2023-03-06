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
        setUserName(state, { payload }) {
            state.userName = payload
        },
        setTotalQuestion(state) {
            state.totalQuestion = state.totalQuestion + 1
        },
        setCorrectAnswers(state) {
            state.correctAnswers = state.correctAnswers + 1
        },
        setIncorrectAnswers(state) {
            state.incorrectAnswers = state.incorrectAnswers + 1
        },
        setTotalScore(state, { payload }) {
            state.totalScore = payload
        },
    }
})

export const { actions } = statisticSlice;

export default statisticSlice.reducer



