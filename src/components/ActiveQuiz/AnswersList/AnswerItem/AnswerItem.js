import React from 'react';
import './AnswerItem.css';

export default props => {
  const cns = ['QuestionItem'];

  if (props.state) {
    cns.push(props.state);
  }

  return (
    <li className={cns.join(' ')} onClick={() => props.onClick(props.answer.id)}>
      {props.answer.text}
    </li>
  );
};
