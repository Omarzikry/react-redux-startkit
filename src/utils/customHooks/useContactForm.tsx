import { useEffect, useState } from "react";
import { Inputs } from "../../components/AddContact/AddContact";
import { validate } from "../validate";
const useContactForm = (
  initial = {
    name: "",
    email: "",
    country: "",
  }
) => {
  // create a state object for our inputs
  const [inputs, setInputs] = useState<Inputs>(initial);
  const initialValues = Object.values(initial).join("");

  useEffect(() => {
    // This function runs when the things we are watching change
    setInputs(initial);
  }, [initialValues]); // eslint-disable-line react-hooks/exhaustive-deps

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    country: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    country: "",
  });

  const handleBlur = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name } = e.currentTarget;

    // use validate function from utils to validate inputs
    const errors = validate(inputs);

    //set touched is true if the input is blured
    setTouched({
      ...touched,
      [name]: true,
    });

    if (errors) {
      setErrors(errors);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let { value, name } = e.target;

    setInputs({
      // copy the existing state
      ...inputs,
      [name]: value,
    });
  };

  const resetForm = () => {
    setInputs(initial);
  };

  // return the things we want to surface from this custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    handleBlur,
    errors,
    touched,
  };
};

export default useContactForm;
