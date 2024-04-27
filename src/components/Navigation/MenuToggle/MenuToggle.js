import React from 'react';
import './MenuToggle.css';

export default props => {
  const cls = ['MenuToggle', 'fa', props.state ? 'fa-times' : 'fa-bars', props.state ? 'open' : ''];

  return <i className={cls.join(' ')} onClick={props.onToggle} />;
};
