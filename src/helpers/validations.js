export const mainStepperNextStep = (
  currentStep,
  checkboxValue,
  radioValue,
  name
) => {
  let errorMessage = "";
  let shouldIncrease = false;
  if (currentStep === 0) {
    if (checkboxValue.length > 0) {
      shouldIncrease = true;
    }
    errorMessage = "Selecione pelo menos um dos valores";
  } else if (currentStep === 1) {
    if (!!radioValue) {
      shouldIncrease = true;
    }
    errorMessage = "Selecione uma resposta";
  } else if (currentStep === 2) {
    if (!!name) {
      shouldIncrease = true;
    }
    errorMessage = "Digite seu nome";
  }
  return { errorMessage, shouldIncrease };
};

export const secondaryStepperNextStep = (
  currentStep,
  standardDate,
  modernDate
) => {
  let errorMessage = "";
  let shouldIncrease = false;
  if (currentStep === 0) {
    if (!!standardDate) {
      shouldIncrease = true;
    }
    errorMessage = "Preencha a data";
  } else if (currentStep === 1) {
    if (!!modernDate) {
      shouldIncrease = true;
    }
    errorMessage = "Preencha a data";
  }
  return { errorMessage, shouldIncrease };
};
