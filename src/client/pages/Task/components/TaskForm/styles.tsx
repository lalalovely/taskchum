import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-bottom: 5px;
  width: 100%;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
  overflow-x: hidden;
  border-radius: 10px;
`;

export const Form = styled.form`
  display: block;
  margin: 0;
  padding: 0;
`;

export const FormFieldsWrapper = styled.div`
  margin-bottom: 10px;
  border: none;
  cursor: text;
`;

export const InputFields = styled.div`
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const InputFieldWrapper = styled.div`
  margin-bottom: 10px;
`;

export const TextAreaContainer = styled.div`
  .textarea {
    display: block;
    margin: 8px 0px;
    height: auto;
    width: 100%;
    font-size: 15px;
    line-height: 1.4em;
    border-radius: 4px;
    border: none;
    outline: none;
    color: rgb(85, 85, 85);
    background-color: transparent;
  }
`;

export const Input = styled.input`
  padding: 5px 0;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  border: none;
  outline: none;
  cursor: text;
`;

export const FormActionsWrapper = styled.div`
  display: block;
  margin: 0;
  margin-top: 8px;
  padding: 0;
  width: 100%;
  font-size: 14px;
  font-family: inherit;
  border: 0;
  vertical-align: baseline;
  list-style: none;
  background-color: transparent;
`;

export const FormActions = styled.div`
  display: flex;
  padding: 0;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  list-style: none;
  border: 0;
  background-color: transparent;
`;

export const ButtonContainer = styled.div`
  margin-left: 8px;
`;
