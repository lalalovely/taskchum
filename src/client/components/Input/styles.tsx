//import Textarea from "react-autosize-textarea";
import styled, { css } from 'styled-components';

const commonStyle = css`
  padding: 12px 16px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid gray;

  &:focus {
    outline: none;
    border: 1px solid blue;
  }
`;

export const StyledInput = styled.input`
  ${commonStyle};
`;

export const StyledTextarea = styled.textarea`
  ${commonStyle};
  resize: none;
`;
