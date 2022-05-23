import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const pics = [
  { image: 'https://www.serebii.net/blackwhite/pokemon/486.png' },
  { image: 'https://www.serebii.net/blackwhite/pokemon/384.png' },
  { image: 'https://www.serebii.net/blackwhite/pokemon/386.png' }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Carousel images={pics} />);
