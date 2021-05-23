// ACTION TYPES 

// update current score
export const UPDATE_SCORE = "UPDATE_SCORE";
// update question 
export const UPDATE_QUESTION = "UPDATE_QUESTION";
// update answer 
export const UPDATE_ANSWER = "UPDATE_ANSWER";
// update index 
export const UPDATE_INDEX = "UPDATE_INDEX";

// ACTION CREATORS 
// update current score 
export const update_score = (score)=>({
    type:UPDATE_SCORE,
    payload: {score:score}
});


export const update_question = (question)=>({
    type:UPDATE_QUESTION,
    payload:{question:question}
})

export const update_answer = (answer)=>({
    type:UPDATE_ANSWER,
    payload:{answer:answer}
})

export const update_index = (index)=>({
    type:UPDATE_INDEX,
    payload:{index:index}
})