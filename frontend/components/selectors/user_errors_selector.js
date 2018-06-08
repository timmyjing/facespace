

const userErrorsSelector = errors => {
  const errorsObj = {};
  errors.forEach( error => {
    switch(error) {
      case "Email can't be blank":
        errorsObj["email"] = "We'll use this to spam you.";
        break;
      case "First name can't be blank":
        errorsObj["first"] = "Baby girl, what's your name?";
        break;
      case "Last name can't be blank":
        errorsObj["last"] = "What's your name?";
        break;
      case "Birth date can't be blank":
        errorsObj["birth"] = "It's okay if you don't have a birthday.";
        break;
      case "Gender is not included in the list":
        errorsObj["gender"] = "Please choose a gender. You can change who sees this later.";
        break;
      case "Password is too short (minimum is 6 characters)":
        errorsObj["pw"] = "Enter a combination of at least six numbers, letters and punctuation marks (like ! and &).";
        break;
      default:
        break;
    }
  });

  return errorsObj;
};

export default userErrorsSelector;
