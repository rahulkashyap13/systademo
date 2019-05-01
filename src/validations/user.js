import { ValidationTypes } from "js-object-validation";

export const UserValidations = {
  firstName: {
    [ ValidationTypes.REQUIRED ]: true,
    [ ValidationTypes.MAXLENGTH ]: 15,
  },
  lastName: {
    [ ValidationTypes.REQUIRED ]: true,
    [ ValidationTypes.MAXLENGTH ]: 15,
  },
  description: {
    [ ValidationTypes.REQUIRED ]: true,
    [ ValidationTypes.MAXLENGTH ]: 50,
  },
};

export const UserValidationsMessaages = {
  firstName: {
    [ ValidationTypes.REQUIRED ]: "Please enter first name.",
    [ ValidationTypes.MAXLENGTH ]: "First Name cannot have more that 15 characters.",
  },
  lastName: {
    [ ValidationTypes.REQUIRED ]: "Please enter last name.",
    [ ValidationTypes.MAXLENGTH ]: "Last Name cannot have more that 15 characters",
  },
  description: {
    [ ValidationTypes.REQUIRED ]: "Please enter description.",
    [ ValidationTypes.MAXLENGTH ]: "Description cannot have more that 50 characters",
  },
};
