import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';

const topicList = [
  { topic: 'HTML', content: 'What you see' },
  { topic: 'JavaScript', content: 'What you dont see' },
  { topic: 'CSS', content: 'The style of what you see' }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Accordion topics={topicList}/>);
