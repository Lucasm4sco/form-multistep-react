import { useState } from "react";

export const UseForm = (steps) => {
    const [ currentStep, setCurrentStep ] = useState(0);

    const changeStep = (i, e) => {
        e?.preventDefault();

        if(i < 0 || i >= steps.length) return

        setCurrentStep(i);
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        isFirstStep: currentStep === 0,
        isLastStep: (currentStep + 1) === steps.length
    }
}