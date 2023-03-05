import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import ModalWindow from '../ModalWindow';
import useOpen from '../../utils/useOpen'
import { randomInRange } from '../../utils/helper'
import './GamePage.css';
import { actions } from '../../store/board/slice';

const GameBoard = () => {
  const dispatch = useDispatch()
  const [cluesObject, setCluesObject] = useState({})
  const { open, handleOpen, handleClose } = useOpen()
  const [isGameStarted, setIsGameStarted] = useState(false)


  const list = useSelector((store) => store.board.list, shallowEqual);

  const onClick = (clues, counter, index) => {
    handleOpen()
    dispatch(actions.changeToOpen({ id: counter.id, index }))
    const cluesData = clues.filter((clue) => clue.value === counter.score)
    setCluesObject(cluesData[randomInRange(0, cluesData.length)])
  };

  const handleGameStart = () => {
    if (isGameStarted) {
      setIsGameStarted(false);
      dispatch(actions.resetBoard());
    } else {
      setIsGameStarted(true);
    }
  };


  return (
    <div className={`game__page ${isGameStarted ? '' : 'blur'}`}>
      <div className="container">
        <div className="board">
          <div className="grid-container">
            {list.map((item, index) => (
              <>
                <div key={index} className="grid-item">{item.title}</div>
                {item.counters.map((counter, counterIndex) => (
                  <div
                    key={counterIndex}
                    className={`grid-item ${isGameStarted ? '' : 'not-clickable'}`}
                    role="presentation"
                    onClick={() => isGameStarted && !counter.hasBeenOpened && onClick(item.clues, counter, index)}
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
            className={`game__btn ${isGameStarted ? 'active' : ''}`}
            onClick={handleGameStart}
          >
            {isGameStarted ? 'End the game' : 'Start'}
          </button>


        </div>
      </div>
    </div>
  );
};

export default GameBoard;