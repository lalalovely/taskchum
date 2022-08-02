import React, { useState, useEffect, useRef, TextareaHTMLAttributes } from 'react';
import styled from 'styled-components';

const AutoTextArea = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState('');
  const [textAreaHeight, setTextAreaHeight] = useState('auto');
  const [parentHeight, setParentHeight] = useState('auto');

  useEffect(() => {
    setParentHeight(`${textAreaRef.current?.scrollHeight}px`);
    setTextAreaHeight(`${textAreaRef.current?.scrollHeight}px`);
  }, [text]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaHeight('auto');
    setParentHeight(`${textAreaRef.current?.scrollHeight}px`);
    setText(event.target.value);

    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <Container
      style={{
        minHeight: parentHeight,
      }}
    >
      <TextArea
        {...props}
        ref={textAreaRef}
        rows={1}
        style={{
          height: textAreaHeight,
        }}
        onChange={onChangeHandler}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const TextArea = styled.textarea`
  outline: none;
  font-size: 15px;
  line-height: 1.4em;
  margin: 8px 0px;
  display: block;
  border-radius: 4px;
  background-color: rgb(239, 239, 239);
  border: none;
  //padding: 10px 14px;
  color: rgb(85, 85, 85);
  width: 100%;
`;

export default AutoTextArea;
