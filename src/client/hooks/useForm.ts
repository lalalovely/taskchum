import { ChangeEvent, FormEvent, useState } from 'react';

import { FormValidation } from '../interfaces/FormValidation';

type ErrorMessage<T> = Partial<Record<keyof T, string>>;
type FormValidations<T extends Record<string, unknown>> = Partial<Record<keyof T, FormValidation>>;

export const useForm = <T extends Record<keyof T, any> = Record<string, unknown>>(options?: {
  validations?: FormValidations<T>;
  initialValues?: Partial<T>;
  onSubmit?: (details: Partial<T>) => void;
}) => {
  const [data, setData] = useState<T>((options?.initialValues || {}) as T);
  const [errors, setErrors] = useState<ErrorMessage<T>>({});

  const handleChange =
    <S>(key: keyof T, sanitizeFn?: (value: string) => S) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;
      errors[key] = '';
      setErrors(errors);
      setData({
        ...data,
        [key]: value,
      });
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validations = options?.validations;
    if (validations) {
      let valid = true;
      const newErrors: ErrorMessage<T> = {};
      for (const key in validations) {
        const value = data[key] ?? '';
        const validation = validations[key];
        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[key] = validation?.required?.message;
        }

        const pattern = validation?.pattern;
        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern.message;
        }

        const custom = validation?.custom;
        if (custom?.isValid && !custom.isValid(value)) {
          valid = false;
          newErrors[key] = custom.message;
        }
      }

      if (!valid) {
        setErrors(newErrors);
        return;
      }
    }

    setErrors({});

    if (options?.onSubmit) {
      options.onSubmit(data);
    }
  };

  return {
    data,
    handleChange,
    handleSubmit,
    errors,
  };
};
