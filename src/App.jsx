import React, { useState } from "react";
import QuestionsList from "./Constants/Data.json";
import Question from "./Components/Question";
import Result from "./Components/Result";
const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAns, setUserAns] = useState([]);

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAns([...userAns, isCorrect]);
  };
  const resetQuiz= () =>{
    setCurrentQuestion(0);
    setUserAns([]);
  }
  return (
    <div className="font-serif text-center p-5">
      <h1 className="text-4xl mt-3">Quiz App</h1>
      {/* Question component */}
 {  currentQuestion < QuestionsList.length &&  ( <Question
        questions={QuestionsList[currentQuestion]}
        onAnsClick={handleNextQuestion}
        currentQuestion={currentQuestion}
      />)}
      {/* result component */}

{currentQuestion === QuestionsList.length &&<Result  userAns={ userAns }  questionList={QuestionsList}resetQuiz={resetQuiz}/>}


    </div>
  );
};

export default App;
