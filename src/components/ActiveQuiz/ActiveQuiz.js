import React from 'react';
import AnswersList from './AnswersList/AnswersList';
import './ActiveQuiz.css';

export default props => (
  <div className={'ActiveQuiz'}>
    <p className={'Question'}>
      <span>
        <strong>{props.answerNumber}</strong>.&nbsp;
        {props.question}
      </span>
      <small>
        {props.answerNumber} of {props.quizLength}
      </small>
    </p>

    <AnswersList answers={props.answers} onAnswerClick={props.onAnswerClick} state={props.state} />
  </div>
);
