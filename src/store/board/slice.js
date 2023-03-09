import { createSlice } from "@reduxjs/toolkit";

const parseList = (list) => list.map(({ data }) => {
  return {
    title: data.title,
    clues: data.clues,
    counters: [
      {
        id: 1,
        score: 100,
        hasBeenOpened: false
      },
      {
        id: 2,
        score: 200,
        hasBeenOpened: false
      },
      {
        id: 3,
        score: 300,
        hasBeenOpened: false
      },
      {
        id: 4,
        score: 400,
        hasBeenOpened: false
      },
      {
        id: 5,
        score: 500,
        hasBeenOpened: false
      }
    ]
  };
})

const initialState = {
   list: [],
   isStarted: false
}

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
      getList(state, {payload}) {
        state.list = parseList(payload)
      },
      setGameStart(state, {payload}) {
        state.isStarted = payload
      },
      setToOpen(state, {payload}) {
        state.list = state.list.map((item, index) => {
          if(index === payload.index) {
            return {
              ...item,
              counters: item.counters.map((counter) => {
                if(counter.id === payload.id) {
                  return {
                    ...counter,
                    hasBeenOpened: true
                  }
                } else {
                  return counter
                }
              })
            }
          } else {
            return item
          }
        })
      },
      resetGame(state) {
        state.isStarted = false;
        state.list.forEach((item) => {
          item.counters.forEach((counter) => {
            counter.hasBeenOpened = false;
          });
        });
      },
    }
})

export const { actions } = boardSlice;

export default boardSlice.reducer



