import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import './Login.css';
import { actions } from '../../store/statistic/slice';


const LogIn = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userName = useSelector((state) => state.statistic.userName, shallowEqual);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    dispatch(actions.setUserName(name));
    (Boolean(userName))
    navigate("/game")
    if (Boolean(userName)) {
      navigate("/game")
    };
  };

  return (
    <div className="login_page">
      <div className="container">
        <div className="login">
          <input
            className='login__input'
            type="text"
            placeholder='Type your name...'
            value={name}
            payload={name}
            onChange={handleInputChange}
          />

          <button
            className='login__btn'
            type='submit'
            onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

