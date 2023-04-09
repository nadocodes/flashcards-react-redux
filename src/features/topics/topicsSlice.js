import { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {},
    },
    reducers: {
        addTopic: (state, action) => {
            const { id } = action.payload;
            state.topics[id] = action.payload;
        },
        addQuizId: (state, action) => {
            const { quizId, topicId } = action.payload;
            state.topics[topicId].quizIds.push(quizId);
        }
    }
});

export const { addTopic, addQuizId } = topicsSlice.actions;
export const selectTopics = (state) => state.topicsSlice.topics;
export default topicsSlice.reducer;