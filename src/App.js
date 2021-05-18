import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import logo from './img/logo.png';

const headerStyle = css`
  background-color: black;
`;

function App() {
  return (
    <header css={headerStyle}>
      <img src={logo} alt="logo" />
      <h1>Test</h1>
    </header>
  );
}

export default App;
