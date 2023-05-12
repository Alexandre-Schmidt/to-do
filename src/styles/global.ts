import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["blue-300"]};
  }

  body{
    min-height: 100vh;
    background: ${(props) => props.theme["gray-600"]};
    color: ${(props) => props.theme["gray-300"]};
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
  }

  body, input, textarea, button{
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
  cursor: pointer;
}

@media only screen and (max-width: 768px) {
  body {
    font-size: 0.875rem;
  }
}
@media only screen and (max-width: 425px) {
  body {
    font-size: 0.75rem;
  }
}

/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.theme["gray-300"]} ${(props) =>
  props.theme["gray-500"]};
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 0.5rem;
}

*::-webkit-scrollbar-track {
  background: ${(props) => props.theme["gray-500"]};
}

*::-webkit-scrollbar-thumb {
  background-color: ${(props) => props.theme["gray-300"]};
  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme["gray-700"]};;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;
