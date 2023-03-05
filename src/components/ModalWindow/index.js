import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';

import { actions } from '../../store/statistic/slice';
import './modal.css';


const customStyles = {
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '50%',
    overflow: 'auto',
    borderRadius: '5px',
    outline: 'none',
    padding: '20px',
  },
  closeButton: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    cursor: 'pointer',
  },
};


function ModalWindow({ open, handleClose, data, setData }) {
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState('')

  const { userName, totalQuestion, correctAnswers, incorrectAnswers, totalScore } = useSelector((store) => ({
    userName: store.statistic.userName,
    totalQuestion: store.statistic.totalQuestion,
    correctAnswers: store.statistic.correctAnswers,
    incorrectAnswers: store.statistic.incorrectAnswers,
    totalScore: store.statistic.totalScore
}), shallowEqual)
  
  const closeModal = () => {
    handleClose()
    setAnswer('') 
    setData({})
  } 

  const handleChange = (e) => setAnswer(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose()
    setAnswer('')
    if(answer.toString().toLowerCase() === data.answer.toString().toLowerCase()) {
      dispatch(actions.setTotalScore(totalScore + data.value));
    } else {
      dispatch(actions.setTotalScore(totalScore - data.value));
    }
  }
  
  return (
    <Modal
      isOpen={open}
      onRequestClose={closeModal}
      style={customStyles}
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
      ariaHideApp={false}
    >
      <button className='btn_close'  style={customStyles.closeButton} onClick={closeModal}>X</button>
      <div className='modal_question'>{data.question}</div>
      <form className='modal_form' onSubmit={handleSubmit}>
        <input 
          type="text"
          id="answer"
          name="answer"
          className='modal_input'
          value={answer}
          placeholder="Type..."
          onChange={handleChange}
        />
        <button type="submit"  className='btn_submit' >
          submit
        </button>
      </form>
    </Modal>
  );
}

export default ModalWindow