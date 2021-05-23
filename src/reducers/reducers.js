import {UPDATE_SCORE,UPDATE_QUESTION,UPDATE_ANSWER,UPDATE_INDEX} from '../actions/actions';
import data from "../sample_data.json";
const initState = {
    score:0,
    question:data[Object.keys(data)[0]].content,
    index:Object.keys(data)[0],
    answer:data[Object.keys(data)[0]].answer,
}

// update state  
const merge=(prev, next) => Object.assign({},prev,next);


const reducer = (state=initState,action)=>{
    switch(action.type){
        case UPDATE_SCORE:
            return merge(state,action.payload);
        case UPDATE_QUESTION:
            return merge(state,action.payload);
        case UPDATE_ANSWER:
            return merge(state,action.payload);
        case UPDATE_INDEX:
            return merge(state,action.payload);
        default: return state
    } 
}

export default reducer; 