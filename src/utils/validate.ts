import { Inputs } from "../components/AddContact/AddContact";

interface ContactsErrros {
  name: string;
  email: string;
  country: string;
}

export const validate = (inputs: Inputs) => {
  const errors: ContactsErrros = {
    name: "",
    email: "",
    country: "",
  };

  // Name
  const fullNameRegex = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
  if (!inputs.name) {
    errors.name = "Please enter a name";
  } else if (!fullNameRegex.test(inputs.name)) {
    errors.name = "Please enter a valid name";
  } else if (fullNameRegex.test(inputs.name)) {
    errors.name = "";
  }

  // email
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  if (!inputs.email) {
    errors.email = "Please enter an email";
  } else if (!emailRegex.test(inputs.email)) {
    errors.email = "Please enter a valid email";
  } else {
    errors.email = "";
  }

  // country
  if (!inputs.country) {
    errors.country = "Please select a country";
  } else {
    errors.country = "";
  }

  return errors;
};
