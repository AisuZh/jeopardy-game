import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './StatisticBoard.css'

const StatisticBoard = () => {
    const {
        userName,
        totalQuestion,
        correctAnswers,
        incorrectAnswers,
        totalScore,
        statisticList,
    } = useSelector((store) => store.statistic);

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

                    <div>
                        <h2 className='saved_stat'>Saved Statistics</h2>
                        <ul>
                            {statisticList.map((statistic, index) => (
                                <li key={index}>
                                    <div className='statistic_board-wrapper'>
                                        <div className='statistic_info'>Player's name:</div>
                                        <div className='statistic_info'>{statistic.userName}</div>
                                        <div className='statistic_info'>Total questions:</div>
                                        <div className='statistic_info'>{statistic.totalQuestion}</div>
                                        <div className='statistic_info'>Correct answers:</div>
                                        <div className='statistic_info'>{statistic.correctAnswers}</div>
                                        <div className='statistic_info'>Incorrect answers:</div>
                                        <div className='statistic_info'>{statistic.incorrectAnswers}</div>
                                        <div className='statistic_info'>Total score:</div>
                                        <div className='statistic_info'>{statistic.totalScore}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatisticBoard;

