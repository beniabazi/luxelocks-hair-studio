import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #f7c5cc; // Soft Pink
    --secondary-color: #fdece2; // Warm Neutral
    --accent-color: #d4af37; // Gold
    --text-color: #333;
    --background-color: #fff;
    --serif-font: 'Lora', serif;
    --sans-serif-font: 'Montserrat', sans-serif;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: var(--sans-serif-font);
    color: var(--text-color);
    background-color: var(--background-color);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--serif-font);
  }
`;

export default GlobalStyle;
