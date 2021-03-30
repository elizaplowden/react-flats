import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import '../assets/stylesheets/application.scss';

// render an instance of the component in the DOM
ReactDOM.render(<App />, document.querySelector('#root'));

// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };

// const root = document.getElementById('root');
// if (root) {
//   ReactDOM.render(<Hello name="World" />, root);
// }
