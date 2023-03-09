// import React from 'react'
// import { useSelector, shallowEqual } from 'react-redux';
// import store from '../../store';

// import './StatisticBoard.css'

// const StatisticBoard = () => {
//     const { userName, totalQuestion, correctAnswers, incorrectAnswers, totalScore, allStatistics } = useSelector((store) => ({
//         userName: store.statistic.userName,
//         totalQuestion: store.statistic.totalQuestion,
//         correctAnswers: store.statistic.correctAnswers,
//         incorrectAnswers: store.statistic.incorrectAnswers,
//         totalScore: store.statistic.totalScore,
//         allStatistics: store.statistic.allStatistics
//     }), shallowEqual)


//     return (
//         <div className='static_page'>
//             <div className='container'>
//                 <div className='board'>
//                     <p className='statistic_title'>Statistics</p>
//                     <div className='statistic_board-wrapper'>
//                         <div className='statistic_info'>Player's name:</div>
//                         <div className='statistic_info'>{userName}</div>
//                         <div className='statistic_info'>Total questions:</div>
//                         <div className='statistic_info'>{totalQuestion}</div>
//                         <div className='statistic_info'>Correct answers:</div>
//                         <div className='statistic_info'>{correctAnswers}</div>
//                         <div className='statistic_info'>Incorrect answers:</div>
//                         <div className='statistic_info'>{incorrectAnswers}</div>
//                         <div className='statistic_info'>Total score:</div>
//                         <div className='statistic_info'>{totalScore}</div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default StatisticBoard

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../store/statistic/slice';

import './StatisticBoard.css'

const StatisticBoard = () => {
    const dispatch = useDispatch();

    const {
        userName,
        totalQuestion,
        correctAnswers,
        incorrectAnswers,
        totalScore,
        statisticList,
    } = useSelector((store) => store.statistic);

    // const startNewGameHandler = () => {
    //     dispatch(actions.startNewGame());
    // };
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
                    {/* <button className='btn_update' onClick={startNewGameHandler}>update statistic</button> */}
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

