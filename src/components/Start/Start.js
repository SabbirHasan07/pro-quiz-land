import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import './Start.css';




const Start = () => {
    const dataQuiz = useLoaderData();
    const singleData = dataQuiz.data;
    const {name} = singleData;
    const questionsAll = singleData.questions;
    //console.log(questionsAll);
   
    
    return (
        <div className='all-container'>
          <h1>Quiz of {name}</h1>
          <div>
            {
                questionsAll.map(questions=> <Questions
                key = {questions.id}
                questions = {questions}
                ></Questions> )
            }
          </div>
          
        </div>
       
    );
};

export default Start;