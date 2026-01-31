"use client";

import React, { useState, Children, ReactNode, ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StepProps {
  children: ReactNode;
}

export const Step: React.FC<StepProps> = ({ children }) => {
  return <>{children}</>;
};

interface StepperProps {
  children: ReactNode;
  initialStep?: number;
  onStepChange?: (step: number) => void;
  onFinalStepCompleted?: () => void;
  backButtonText?: string;
  nextButtonText?: string;
}

const Stepper: React.FC<StepperProps> = ({
  children,
  initialStep = 1,
  onStepChange,
  onFinalStepCompleted,
  backButtonText = "Previous",
  nextButtonText = "Next",
}) => {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const stepsArray = Children.toArray(children) as ReactElement[];
  const totalSteps = stepsArray.length;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
      onStepChange?.(newStep);
    } else {
      onFinalStepCompleted?.();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      const newStep = currentStep - 1;
      setCurrentStep(newStep);
      onStepChange?.(newStep);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-8">
        {stepsArray.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index + 1 === currentStep
                ? "w-8 bg-white"
                : index + 1 < currentStep
                ? "w-2 bg-zinc-500"
                : "w-2 bg-zinc-800"
            }`}
          />
        ))}
      </div>

      <div className="relative min-h-[200px] bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {stepsArray[currentStep - 1]}
          </motion.div>
        </AnimatePresence>
      </div>

      {totalSteps > 1 && (
        <div className="flex justify-between mt-6">
          <button
            onClick={handleBack}
            className={`px-6 py-3 rounded-full font-medium text-sm transition-all ${
              currentStep === 1
                ? "opacity-0 pointer-events-none"
                : "bg-zinc-800 text-white hover:bg-zinc-700"
            }`}
          >
            {backButtonText}
          </button>
          {currentStep < totalSteps && (
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-zinc-200 transition-all"
            >
              {nextButtonText}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Stepper;
