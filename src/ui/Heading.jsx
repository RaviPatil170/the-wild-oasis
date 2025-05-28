import styled from "styled-components";

const test = styled.div`
  text-align: center;
  ${10 > 5 && "background-color: red;"}
`;
const Heading = styled.h1`
  ${(props) =>
    props.type === "h1" &&
    css`
      font-size: 3.2rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.type === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

${(props) =>
    props.type === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
`;

export default Heading;
