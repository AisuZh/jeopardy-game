// import React, { useState, useEffect } from 'react';
// import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';

// import GameBoard from '../components/GameBoard/GameBoard';
// import { actions } from '../store/board/slice';

// const GamePage = () => {
//   const dispatch = useDispatch()
//   const [gameBoards, setGameBoards] = useState([])
  
//   const list = useSelector((store) => store.board.list, shallowEqual);


//   const getData = async () => {
//     const endpoints = [
//       'https://jservice.io/api/category?id=5',
//       'https://jservice.io/api/category?id=22',
//       'https://jservice.io/api/category?id=500',
//       'https://jservice.io/api/category?id=99',
//       'https://jservice.io/api/category?id=15',
//     ];

//     axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
//       (response) => setGameBoards(response),
//     );
//   }

//   useEffect(() => {
//     if(!list.length) {
//       getData();
//     }
//   }, []);

//   useEffect(() => {
//     if(gameBoards.length && !list.length) {
//       dispatch(actions.getList(gameBoards))
//     }
//   }, [gameBoards]);

//   return (
//     <GameBoard />
//   )
// }

// export default GamePage


import React, { useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import GameBoard from '../components/GameBoard/GameBoard';
import { actions } from '../store/board/slice';
import loader from '../components/assets/loader.svg'
import './loader.css'

const GamePage = () => {
  const dispatch = useDispatch()
  const [gameBoards, setGameBoards] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  const list = useSelector((store) => store.board.list, shallowEqual);


  const getData = async () => {
    const endpoints = [
      'https://jservice.io/api/category?id=5',
      'https://jservice.io/api/category?id=22',
      'https://jservice.io/api/category?id=500',
      'https://jservice.io/api/category?id=99',
      'https://jservice.io/api/category?id=15',
    ];

    setIsLoading(true)
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      (response) => {
        setGameBoards(response)
        setIsLoading(false)
      },
    );
  }

  useEffect(() => {
    if(!list.length) {
      getData();
    }
  }, []);

  useEffect(() => {
    if(gameBoards.length && !list.length) {
      dispatch(actions.getList(gameBoards))
    }
  }, [gameBoards]);

  return (
    <>
      {isLoading ? <div className="loader"><img src={loader} alt="Loading..." /></div> : <GameBoard />}
    </>
  )
}

export default GamePage
