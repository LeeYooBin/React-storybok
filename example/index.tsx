import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../.';
import { LoginButton } from '../.';

const App = () => {
  return (
    <div>
      <LoginButton onClick={() => console.log("Hello world")}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
