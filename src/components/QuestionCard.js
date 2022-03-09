import React from 'react';

export const QuestionCard = (props) => {
  return( <div className='questionCard'>
            <h3>Name</h3>
            <p>{props.ques.name}</p>
            <h3>Phone</h3>
            <p>{props.ques.phone}</p>
            <h3>Question</h3>
            <p>{props.ques.question}</p>
        </div>
  );
};
