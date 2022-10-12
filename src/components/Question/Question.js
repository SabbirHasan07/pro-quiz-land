   import React from 'react';
   import { ToastContainer, toast } from 'react-toastify';
   import 'react-toastify/dist/ReactToastify.css';
const Question = ({sqn,questions,options}) => {
   const {correctAnswer} = questions;
   



    
const hello = sqn =>{
  if(sqn===correctAnswer){
    toast.success('Correct Answer!', {
        position: "top-center",
        autoClose: 600,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
  }
  else{
    
    toast.error(' Worng Answer', {
        position: "top-center",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
  }
  
    
}
 return (
        <div>
            <button onClick={()=>hello(sqn)}   className='option-container'>{sqn}</button>
            <ToastContainer />
        </div>
    );
};

export default Question;