export interface FormValidation {
  required?: {
    value: boolean;
    message: string;
  };
  pattern?: {
    value: string;
    message: string;
  };
  custom?: {
    isValid?: (value: string) => boolean;
    message: string;
  };
}
