import { useState, useEffect } from 'react';

export default function useFormik({
  initialValues,
  validate
} :any
) {
  const [touched, setTouchedFields] = useState({});
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    console.log( values);
    validateValues(values);
  }, [values]);

  function handleChange(event: { target: { getAttribute?: any; value?: any; }; }) {
    const fieldName = event.target.getAttribute('name');
    const { value } = event.target;
    setValues({
      ...values,
      [fieldName]: value,
    });
  }

  function handleBlur(event: { target: { getAttribute: (arg0: string) => any; }; }) {
    const fieldName = event.target.getAttribute('name');
    console.log(fieldName);
    setTouchedFields({
      ...touched,
      [fieldName]: true,
    });
  }

  function validateValues(values: any) {
    setErrors(validate(values));
  }

  return {
    values,
    errors,
    touched,
    handleBlur,
    setErrors,
    handleChange,
  };
}
