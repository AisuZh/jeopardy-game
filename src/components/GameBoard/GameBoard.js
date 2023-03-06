import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate  } from 'react-router-dom';

import ModalWindow from '../ModalWindow';
import useOpen from '../../utils/useOpen'
import { randomInRange } from '../../utils/helper'
import './GamePage.css';
import { actions } from '../../store/board/slice';
import { actions as statisticActions } from '../../store/statistic/slice';

const GameBoard = () => {
  const dispatch = useDispatch()
  const [cluesObject, setCluesObject] = useState({})
  const { open, handleOpen, handleClose } = useOpen()

  const navigate = useNavigate();

  const { list,  isStarted } = useSelector((store) => ({
    list: store.board.list,
    isStarted: store.board.isStarted
  }), shallowEqual)
  
  const onClick = (clues, counter, index) => {
    handleOpen()
    dispatch(actions.setToOpen({ id: counter.id, index }))
    dispatch(statisticActions.setTotalQuestion());
    const cluesData = clues.filter((clue) => clue.value === counter.score)
    setCluesObject(cluesData[randomInRange(0, cluesData.length)])
  };

  const handleGameAction = () => {
    if (isStarted) {
      dispatch(actions.setGameStart(false));
      navigate('/login')
    } else {
      dispatch(actions.setGameStart(true));
    }
  };


  return (
    <div className="game__page">
      <div className="container">
        <div className="board">
          <div className={`grid-container ${isStarted ? '' : 'blur'}`}>
            {list.map((item, index) => (
              <>
                <div key={index} className="grid-item">{item.title}</div>
                {item.counters.map((counter, counterIndex) => (
                  <div
                    key={counterIndex}
                    className={`grid-item ${isStarted ? '' : 'not-clickable'}`}
                    role="presentation"
                    onClick={() => isStarted && !counter.hasBeenOpened && onClick(item.clues, counter, index)}
                  >
                    {!counter.hasBeenOpened && counter.score}
                  </div>
                ))}
              </>
            ))}
            <ModalWindow open={open} handleClose={handleClose} data={cluesObject} setData={setCluesObject} />
          </div>
          <button
            type="button"
            className={`game__btn ${isStarted ? 'active' : ''}`}
            onClick={handleGameAction}
          >
            {isStarted ? 'End the game' : 'Start'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;