import React, { useState } from 'react';
import Question from '../Question/Question';
import './Questions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPenNib } from '@fortawesome/free-solid-svg-icons';


const Questions = ({ questions }) => {

    const { question, options, correctAnswer } = questions;
    const singleQuestion = options;
    const[answer,setAnswer] = useState([]);
    const correctAnswerqz = (correctAnswer) =>{
        setAnswer(correctAnswer);

    }
    
    
    return (
        <div>
            <div className='start-container'>
                <h3>Question: {question}</h3>
                <div className='question-containet' >
                    {
                        singleQuestion.map(sqn => <Question
                            key={sqn.id}
                            sqn={sqn}
                            questions = {questions}
                            options ={options}
                        ></Question>)

                    }
                </div>
                <div>
                    <h4>Show Answer : {answer} <button onClick={()=>correctAnswerqz(correctAnswer)}> <FontAwesomeIcon icon={faPenNib} /></button></h4>
                </div>



            </div>
        </div>
    );
};

export default Questions;