import React from 'react';

// JSX Version
// const Hello = () => {
//   return (
//     <div className='dummyClass' id='hello'>
//       <h1>Hello, Linda!</h1>
//     </div>
//   );
// };

const Hello = () => {
  return React.createElement(
    'div',
    {id: 'hello', className: 'dummyClass'},
    React.createElement('h1', null, 'Hello, Lindaaa')
  );
};

export default Hello;
