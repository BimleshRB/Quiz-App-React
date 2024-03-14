import React from "react";
import "../App.css";
const Result = ({ userAns, questionList, resetQuiz = () => {} }) => {
  const correctAnswer = userAns.filter((ans) => ans).length;
  return (
    <div className="pt-8 flex items-center justify-center flex-col">
      <h2 className="text-4xl">Result</h2>
      <p className="text-2xl p-2">
        You answered <span className="text-green-500">{correctAnswer} </span>
        correct out of {questionList.length} Questions
      </p>
      <ul className="flex flex-col justify-start text-left gap-1  ">
        {questionList.map((question, index) => (
          <div>
            <li className="data" key={index} data-correct={userAns[index]}>
              Q{index + 1}. {question.question}
            </li>
            <span>
              {question.answerOptions.map((answer, i) => {
                return (
                  <div key={i} className="text-lg text-green-800 m-1">
                    {answer.isCorrect == true && (
                      <span className="flex"> <p className="text-gray-700">Correct Answer  -{">"} </p> {answer.text}</span>
                    )}
                  </div>
                );
              })}
            </span>
          </div>
        ))}
      </ul>
      <button
        onClick={resetQuiz}
        className=" mt-4 border-none rounded-md px-6 py-2 cursor-pointer bg-slate-200 hover:bg-slate-300 "
      >
        Try Again
      </button>
    </div>
  );
};

export default Result;
