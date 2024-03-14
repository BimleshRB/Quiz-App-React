import React from "react";

const Question = ({currentQuestion, questions, onAnsClick }) => {
  console.log(questions, onAnsClick);
  return (
    <div className="mt-14 mb-20 mr-auto ml-auto sm:w-[60%] w-[70%] p-4 rounded-md  border-2 border-gray-100">
      <h2 className="mb-3 text-xl"><span className="text-2xl">{currentQuestion+1}.</span> {questions.question}</h2>
      <ul className="p-0 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {questions.answerOptions.map((item, index) => (
          <li
            key={index}
            className="list-none border-none rounded-md cursor-pointer bg-slate-200 hover:bg-slate-300 "
          >
            <button
              className="mb-3 w-full px-3 py-4 border-none "
              onClick={() => onAnsClick(item.isCorrect)}
            >
              {item.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
