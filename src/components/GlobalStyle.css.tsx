import { createGlobalStyle, css } from 'styled-components';

// Create a global style sheet. The styles inside this will be applied to the entire document.
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    font-size: 18px;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    background-color: #000000;            // background color of the entire page.
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }  

  // Solve button
  button {
    border: none;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;        // cursor change to hand symbol(pointer) when hovering over the button.
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    appearance: none;   
  }

  .container {
    width: 90%;
    max-width: 2000px;
    margin: auto;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  // Error message
  .swal-icon--error {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;

    &__line {
      width: 27px;
      height: 4px;
      top: 29px;
    }
  }

  .swal-title {
    color: #000000;
  }

  .swal-button {
    background-color: #26a5ff;
    transition: background-color 0.3s;

    &:not([disabled]):active, &:not([disabled]):hover {
      background-color: #0090ff;
    }
  }
  
  @media (max-width: 1150px) {
    h1 {
      font-size: 28px;
    }
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 20px;
    }
    
    .container {
      width: 94%;
    }
  }
`;

const sizes = {
  '1275': 1275,
  '1150': 1150,
  '1050': 1050,
  '600': 600,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args: any[]) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css.call(undefined, ...args)}
    }
  `;

  return acc;
}, {});

export default GlobalStyle;
