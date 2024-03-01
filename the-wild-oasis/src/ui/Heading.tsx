import styled, { css } from "styled-components";

//conditionally styling with javascript template literal
// const test = css`
//   text-align: center;
// `;

//This component will extends all props from <h1> component
const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1rem;
      font-weight: 500;
    `}
  line-height: 1.4;
`;

export default Heading;
