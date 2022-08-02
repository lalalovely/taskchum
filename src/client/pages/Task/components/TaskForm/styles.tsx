import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
  overflow-x: hidden;
  border-radius: 10px;
  padding-bottom: 5px;
  width: 100%;
  //z-index: 5;
`;

export const Form = styled.form`
  padding: 0;
  margin: 0;
  display: block;
`;

export const FormFieldsWrapper = styled.div`
  border: none;
  //border: 1px solid #e5e5e5;
  cursor: text;
  margin-bottom: 10px;
`;

export const InputFields = styled.div`
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const InputFieldWrapper = styled.div`
  margin-bottom: 10px;
`;

type InputFieldProps = {
  fontWeight?: number;
  fontSize: string;
};

export const TextAreaContainer = styled.div`
  .textarea {
    border-radius: 4px;
    background-color: transparent;
    border: none;
    //padding: 10px 14px;
    color: rgb(85, 85, 85);
    width: 100%;
    box-sizing: border-box;
    //min-height: 100px;
    height: auto;
    font-size: 15px;
    line-height: 1.4em;
    margin: 8px 0px;
    display: block;
    outline: none;
  }
`;

export const Input = styled.input`
  text-align: left;
  outline: none;
  border: none;
  width: 100%;
  font-weight: 600;
  font-size: 18px;
  padding: 5px 0;
  cursor: text;
  color: #000;
  text-align: left;
`;

export const InputField = styled.div<InputFieldProps>`
  line-height: 21px;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  background-color: transparent;
  list-style: none;
  border: 0;
  margin: 0;
  padding: 5px 0;
  outline: none;
  word-break: break-word;
  cursor: text;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  color: #000;
  text-align: left;

  &:empty::before {
    content: attr(placeholder);
  }
`;

export const FormActionsWrapper = styled.div`
  border: 0;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-family: inherit;
  vertical-align: baseline;
  background-color: transparent;
  list-style: none;
  margin-top: 8px;
  width: 100%;
  display: block;
`;

export const FormActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border: 0;
  padding: 0;
  background-color: transparent;
  list-style: none;
  font-size: 14px;
`;

export const ButtonContainer = styled.div`
  margin-left: 8px;
`;

export const ExtraFieldContainer = styled.div`
  display: flex;
  padding-bottom: 4px;
  width: 100%;
`;

export const FieldLabelContainer = styled.div`
  display: flex;
  align-items: center;
  height: 34px;
  width: 160px;
  flex: 0 0 auto;
  color: rgba(55, 53, 47, 0.65);
  border-radius: 3px;
  padding: 0px 6px;
  user-select: none;
  transition: background 20ms ease-in 0s;
`;

export const FieldLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  line-height: 120%;
  font-size: 14px;
  min-width: 0px;

  .icon {
    margin-right: 8px;
  }

  .label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const FieldOption = styled.div`
  user-select: none;
  transition: background 20ms ease-in 0s;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 3px;
  width: 100%;
  min-height: 34px;
  padding: 6px 8px 7px;
  font-size: 14px;
  overflow: hidden;
  color: rgba(55, 53, 47, 0.5);

  // &:hover {
  //   background-color: rgba(55, 53, 47, 0.08);
  // }

  &:empty::before {
    content: 'Empty';
  }
`;
