import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.type == "horizontal" &&
    css`
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `}
  ${(props) =>
    props.type == "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
      align-items: center;
    `};
`;

Row.defaultProps = {
  type: "horontal",
};
export default Row;
