import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import logo from './img/logo.png';

const headerStyle = css`
  background-color: black;
`;

function App() {
  return (
    <header>
      <img src={logo} alt="logo" />
    </header>
  );
}

export default App;
