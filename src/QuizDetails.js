import React, { useState } from 'react';
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';

const QuizDetails = () => {
    let quizDatas = useLoaderData();
    let quizes = quizDatas.data;
    let allQuiz = quizDatas.data.questions;
    console.log(allQuiz)
    // console.log(quizes);
    let {name} = quizes;
    // console.log(name)
    
    return (
        <div>
            <h1 className='mt-5 text-white text-3xl mb-5'>{name}</h1>
            {
                allQuiz.map(quiz => <ShowQuiz quiz = {quiz}></ShowQuiz>)
            }
            
        </div>
    );
};



let ShowQuiz = ({quiz}) => {

        // console.log(quiz);
        // let a ;
        // let showAnswer = (quiz) => {
        //     if(a == 1){
        //         document.getElementById('correctAns').style.display = "none";
        //         return a=0;
        //     }
        //     else{
        //         document.getElementById('correctAns').style.display = "inline";
        //         return a = 1;
        //     }
            
            
        // }

    let [showCorrectAns, setAnswer] = useState(false);

    return(
           
        <div className='mt-5 mb-5'>
            
            <h2 className='text-white text-xl mt-4'>{quiz.question}</h2>
 
            {
                quiz.options.map(option => <QuizOption option= {option}></QuizOption>)
            }

            {
                showCorrectAns && <h2 className='text-cyan-500 text-xl font-extrabold'>Correct Answer : {quiz.correctAnswer}</h2>
            }
            
            <button className="btn btn-primary mt-5" onClick={() => setAnswer(true)}>Button</button>

        </div>
            
    )
}
let QuizOption = ({option}) => {
    return(
        <div>

        <div className='bg-slate-100 mt-5 '>
            <div className='flex justify-center items-center'>
            <input type="radio" name="radio-1" className="radio mr-3 radio-accent" />
            <p className='text-red-700 mt-3 mb-3'>{option}</p>

            </div>
        </div>
        
        </div>
    )
}




// let Quiz = () => {

// }




export default QuizDetails;