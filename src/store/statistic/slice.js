// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     statisticList : [],
//     userName: '',
//     totalQuestion: 0,
//     correctAnswers: 0,
//     incorrectAnswers: 0,
//     totalScore: 0
// }


// const statisticSlice = createSlice({
//     name: 'statistic',
//     initialState,
//     reducers: {
//         setUserName(state, { payload }) {
//             state.userName = payload;
//             state.totalQuestion = 0;
//             state.correctAnswers = 0;
//             state.incorrectAnswers = 0;
//             state.totalScore = 0;
//             state.statisticList = [];
//           },
//         startNewGame(state) {
//             // добавляем данные текущей игры в массив со статистикой предыдущих игр
//             state.statisticList.push({
//                 userName: state.userName,
//                 totalQuestion: state.totalQuestion,
//                 correctAnswers: state.correctAnswers,
//                 incorrectAnswers: state.incorrectAnswers,
//                 totalScore: state.totalScore,
//             });
//             // обнуляем текущую статистику
//             state.totalQuestion = 0;
//             state.correctAnswers = 0;
//             state.incorrectAnswers = 0;
//             state.totalScore = 0;
//         },
//         setTotalQuestion(state) {
//             state.totalQuestion = state.totalQuestion + 1
//         },
//         setCorrectAnswers(state) {
//             state.correctAnswers = state.correctAnswers + 1
//         },
//         setIncorrectAnswers(state) {
//             state.incorrectAnswers = state.incorrectAnswers + 1
//         },
//         setTotalScore(state, { payload }) {
//             state.totalScore = payload
//         },
//     }
// })

// export const { actions } = statisticSlice;

// export default statisticSlice.reducer


// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   playersStats: {},
//   currentGameStats: {
//     totalQuestion: 0,
//     correctAnswers: 0,
//     incorrectAnswers: 0,
//     totalScore: 0
//   }
// };

// const statisticSlice = createSlice({
//   name: "statistic",
//   initialState,
//   reducers: {
//     setUserName(state, { payload }) {
//       const playerName = payload;
//       state.currentGameStats = {
//         totalQuestion: 0,
//         correctAnswers: 0,
//         incorrectAnswers: 0,
//         totalScore: 0
//       };
//       state.playersStats[playerName] = state.playersStats[playerName] || [];
//     },
//     startNewGame(state) {
//       const playerName = state.currentPlayer;
//       state.playersStats[playerName].push(state.currentGameStats);
//       state.currentGameStats = {
//         totalQuestion: 0,
//         correctAnswers: 0,
//         incorrectAnswers: 0,
//         totalScore: 0
//       };
//     },
//     setTotalQuestion(state) {
//       state.currentGameStats.totalQuestion += 1;
//     },
//     setCorrectAnswers(state) {
//       state.currentGameStats.correctAnswers += 1;
//     },
//     setIncorrectAnswers(state) {
//       state.currentGameStats.incorrectAnswers += 1;
//     },
//     setTotalScore(state, { payload }) {
//       state.currentGameStats.totalScore = payload;
//     }
//   }
// });

// export const { actions } = statisticSlice;

// export default statisticSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  statisticList: [],
  allStatistics: [],
  userName: "",
  totalQuestion: 0,
  correctAnswers: 0,
  incorrectAnswers: 0,
  totalScore: 0,
};

const statisticSlice = createSlice({
  name: "statistic",
  initialState,
  reducers: {
    setUserName(state, { payload }) {
      state.userName = payload;
      state.totalQuestion = 0;
      state.correctAnswers = 0;
      state.incorrectAnswers = 0;
      state.totalScore = 0;
    },

    startNewGame(state) {
          state.statisticList.push({
            userName: state.userName,
            totalQuestion: state.totalQuestion,
            correctAnswers: state.correctAnswers,
            incorrectAnswers: state.incorrectAnswers,
            totalScore: state.totalScore,
          });

        state.totalQuestion = 0;
        state.correctAnswers = 0;
        state.incorrectAnswers = 0;
        state.totalScore = 0;
        state.userName = '';

      },
      
    setTotalQuestion(state) {
      state.totalQuestion = state.totalQuestion + 1;
    },
    setCorrectAnswers(state) {
      state.correctAnswers = state.correctAnswers + 1;
    },
    setIncorrectAnswers(state) {
      state.incorrectAnswers = state.incorrectAnswers + 1;
    },
    setTotalScore(state, { payload }) {
      state.totalScore = payload;
    },
  },
});

export const { actions } = statisticSlice;

export default statisticSlice.reducer;




// import { createSlice } from "@reduxjs/toolkit";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "statistic",
//   storage,
//   whitelist: ["userStatistics"],
// };

// const initialState = {
//   userStatistics: {},
// };

// const statisticSlice = createSlice({
//   name: "statistic",
//   initialState,
//   reducers: {
//     setUserName(state, { payload }) {
//       const userId = payload;
//       if (!state.userStatistics[userId]) {
//         state.userStatistics[userId] = {
//           totalQuestion: 0,
//           correctAnswers: 0,
//           incorrectAnswers: 0,
//           totalScore: 0,
//         };
//       }
//     },
//     startNewGame(state) {
//       // сохраняем статистику текущей игры для текущего пользователя
//       const userId = state.userId;
//       state.userStatistics[userId].totalQuestion += state.totalQuestion;
//       state.userStatistics[userId].correctAnswers += state.correctAnswers;
//       state.userStatistics[userId].incorrectAnswers += state.incorrectAnswers;
//       state.userStatistics[userId].totalScore += state.totalScore;

//       // обнуляем статистику текущей игры
//       state.totalQuestion = 0;
//       state.correctAnswers = 0;
//       state.incorrectAnswers = 0;
//       state.totalScore = 0;
//     },
//     setTotalQuestion(state) {
//       state.totalQuestion = state.totalQuestion + 1;
//     },
//     setCorrectAnswers(state) {
//       state.correctAnswers = state.correctAnswers + 1;
//     },
//     setIncorrectAnswers(state) {
//       state.incorrectAnswers = state.incorrectAnswers + 1;
//     },
//     setTotalScore(state, { payload }) {
//       state.totalScore = payload;
//     },
//   },
// });

// const persistedReducer = persistReducer(persistConfig, statisticSlice.reducer);

// export const { actions } = persistedReducer;
// export default persistedReducer;

