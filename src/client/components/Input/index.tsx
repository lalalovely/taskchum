import React from 'react';

import { StyledInput, StyledTextarea } from './styles';

type ChangeEvent = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>;

type KeyboardEvent =
  | React.KeyboardEvent<HTMLInputElement>
  | React.KeyboardEvent<HTMLTextAreaElement>;

type Props = {
  className?: string;
  name?: string;
  placeholder?: string;
  rows?: number;
  type?: 'text' | 'textarea' | 'number';
  value?: string;
  onChange: (value: string, name?: string) => void;
  onKeyDown?: (e: KeyboardEvent) => void;
};

function Input(props: Props, ref: any) {
  const { className, name, placeholder, rows, type = 'text', value, onChange, onKeyDown } = props;

  function handleChange(e: ChangeEvent) {
    onChange(e.target.value, e.target.name);
  }

  if (type === 'textarea') {
    return (
      <StyledTextarea
        className={className}
        data-testid="Textarea"
        name={name}
        placeholder={placeholder}
        rows={rows}
        value={value}
        ref={ref as React.RefObject<HTMLTextAreaElement>}
        onChange={handleChange as any}
        onKeyDown={onKeyDown}
      />
    );
  }

  return (
    <StyledInput
      className={className}
      data-testid="Input"
      name={name}
      placeholder={placeholder}
      value={value}
      type={type}
      ref={ref as React.RefObject<HTMLInputElement>}
      onChange={handleChange}
      onKeyDown={onKeyDown}
    />
  );
}

export default React.forwardRef(Input);
