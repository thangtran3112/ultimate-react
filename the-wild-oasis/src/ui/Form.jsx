import styled, { css } from "styled-components";
import { MODAL_TYPE, REGULAR_TYPE } from "../constant";

const Form = styled.form`
  ${(props) =>
    props.type === REGULAR_TYPE &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === MODAL_TYPE &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
`;

Form.defaultProps = {
  type: REGULAR_TYPE,
};

export default Form;
