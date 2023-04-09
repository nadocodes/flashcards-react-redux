import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
        const { id } = action.payload;
        state.quizzes[id] = action.payload;
        }
    }
});


export const { addQuiz } = quizzesSlice.actions;
export const selectQuizzes = (state) => state.quizzesSlice.quizzes;
export default quizzesSlice.reducer;

export const addQuizThunk = (quiz) => {
    return (dispatch) => {
        const { topicId, id } = quiz; 
        dispatch(addQuiz(quiz))
        dispatch(addQuizId({ quizId: id, topicId: topicId }))
    }
}