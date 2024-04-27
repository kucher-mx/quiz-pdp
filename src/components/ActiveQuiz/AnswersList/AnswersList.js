import React from 'react';
import AnswerItem from './AnswerItem/AnswerItem';
import './AnswerList.css';

export default props => (
  <ul className={'AnswerList'}>
    {props.answers.map((answer, index) => {
      return (
        <AnswerItem
          answer={answer}
          state={props.state ? props.state[answer.id] : null}
          key={index + answer.id}
          onClick={props.onAnswerClick}
        />
      );
    })}
  </ul>
);
