import React from 'react'
import { useSelector, shallowEqual } from 'react-redux';

import './StatisticBoard.css'

const StatisticBoard = () => {
    const { userName, totalQuestion, correctAnswers, incorrectAnswers, totalScore } = useSelector((store) => ({
        userName: store.statistic.userName,
        totalQuestion: store.statistic.totalQuestion,
        correctAnswers: store.statistic.correctAnswers,
        incorrectAnswers: store.statistic.incorrectAnswers,
        totalScore: store.statistic.totalScore
    }), shallowEqual)

    return (
        <div className='static_page'>
            <div className='container'>
                <div className='board'>
                    <p className='statistic_title'>Statistics</p>
                    <div className='statistic_board-wrapper'>
                        <div className='statistic_info'>Player's name:</div>
                        <div className='statistic_info'>{userName}</div>
                        <div className='statistic_info'>Total questions:</div>
                        <div className='statistic_info'>{totalQuestion}</div>
                        <div className='statistic_info'>Correct answers:</div>
                        <div className='statistic_info'>{correctAnswers}</div>
                        <div className='statistic_info'>Incorrect answers:</div>
                        <div className='statistic_info'>{incorrectAnswers}</div>
                        <div className='statistic_info'>Total score:</div>
                        <div className='statistic_info'>{totalScore}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatisticBoard