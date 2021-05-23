import React,{useState,useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./styles.js";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Alert from '@material-ui/lab/Alert';
import { useSelector, useDispatch } from "react-redux";
import "./mathQuestions.css";
import data from "../../sample_data.json";
const MathQuestions = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const classes = useStyles(props);

  const [isEnd,setIsEnd]=useState(false);
  const [userAnswer,setUserAnswer]=useState("");

  const [showResult,setShowResult]=useState(false);
  const [isCorrect,setIsCorrect]=useState(false);
  // update current question 
  const update_current_question = (keys,index,data)=>{
    if (index>parseInt(keys[keys.length-1])){
      setIsEnd(true);
    } else {
      setIsEnd(false);
      // update questions
      // update answers
      dispatch({
        type:"UPDATE_QUESTION",
        payload:{question:data[keys[index]].content}
      });
      dispatch({
        type:"UPDATE_ANSWER",
        payload:{answer:data[keys[index]].answer}
      });     
      dispatch({
        type:"UPDATE_INDEX",
        payload:{index:index}
      }); 
    }
    setUserAnswer("");
  }
  // skip a question
    // update question, answer and index
  const skip_a_question = ()=>{
    const index = parseInt(state.index)+1;
    const keys = Object.keys(data);
    // if index exceeds the largest key, set isend to true 
    update_current_question(keys,index,data);
    setShowResult(false)
  }
  // submit answer
  // check answer
  // update question and answer
  // update score 
  const submit_a_question = () =>{
    const index = parseInt(state.index)+1;
    const keys = Object.keys(data);
    if (userAnswer===state.answer){
      dispatch({
        type:"UPDATE_SCORE",
        payload:{score:state.score+1}
      });
      setIsCorrect(true);
    } else {
      dispatch({
        type:"UPDATE_SCORE",
        payload:{score:state.score-1}
      });
      setIsCorrect(false);
    }
    update_current_question(keys,index,data);
    setShowResult(true);
    setUserAnswer("");   
  }
    // show alert for correctness of the answer;
    const render_correct=isCorrect?<Alert severity="success">Your Last Question is Correct</Alert>: <Alert severity="error">Your Last question is wrong.</Alert>

  const render_question = (
    <div>
      <h1>Math Questions</h1>
      <h2>Score: {state.score}</h2>
      {showResult?render_correct:null}
      <Grid container alignItems="center" justify="center">
        <Typography variant="h5">{state.question}</Typography>
      </Grid>
      <Grid container alignItems="center" justify="center">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Answer" variant="outlined" onChange={(event)=>{
            setUserAnswer(event.target.value);
          }}/>
        </form>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            skip_a_question()
          }}
        >
          Skip
        </Button>
        <Button variant="outlined" color="primary" onClick={()=>{
          submit_a_question()
        }}>
          Submit
        </Button>
      </Grid>
    </div>
  );
  const render_end = (
    <div>
      <h1>End</h1>
      <h2>Score:{state.score}</h2>
    </div>
  );

  return isEnd?render_end : render_question;
};

export default MathQuestions;
