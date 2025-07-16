"use client";
import { Brain, Copy, Upload } from "lucide-react";
import { useState } from "react";
import Uploadarea from "./uploadarea";
import Analysisarea from "./analysisarea";
import Resultarea from "./resultarea";

type Codeitem = {
  code: string;
  description: string;
  reason: string;
};

type analysisResult = {
  icd10_codes: Codeitem[];
  cpt_codes: Codeitem[];
};

const Middle = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [inputText, setInputText] = useState("");
  const [analysisResult, setAnalysisResult] = useState<analysisResult>();

  //function to trigger to go to next step
  const goToNext = (step: number) => {
    setCurrentStep(step);
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Upper tab section shows current section or step */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div
              className={`flex items-center space-x-2 ${
                currentStep >= 1 ? "text-blue-600" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep >= 1 ? "bg-blue-100" : "bg-gray-100"
                }`}
              >
                <Upload className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium">Upload or Paste Note</span>
            </div>
            <div className="w-8 h-px bg-gray-300"></div>
            <div
              className={`flex items-center space-x-2 ${
                currentStep >= 2 ? "text-blue-600" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep >= 2 ? "bg-blue-100" : "bg-gray-100"
                }`}
              >
                <Brain className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium">
                AI Review & Code Suggestion
              </span>
            </div>
            <div className="w-8 h-px bg-gray-300"></div>
            <div
              className={`flex items-center space-x-2 ${
                currentStep >= 3 ? "text-blue-600" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep >= 3 ? "bg-blue-100" : "bg-gray-100"
                }`}
              >
                <Copy className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium">
                Copy/Use Recommended Codes
              </span>
            </div>
          </div>
        </div>
        {/* step 1 Input and upload */}
      </div>
      {/* input and uplaod */}
      {currentStep === 1 && (
        <Uploadarea
          triggerAction={goToNext}
          setInputText={setInputText}
          inputText={inputText}
        />
      )}
      {/* Review the clinical note */}
      {currentStep === 2 && (
        <Analysisarea
          triggerAction={goToNext}
          inputText={inputText}
          setAnalysisResult={setAnalysisResult}
        />
      )}
      {/* result set of the response */}
      {currentStep === 3 && analysisResult && (
        <Resultarea analysisResult={analysisResult} triggerAction={goToNext} />
      )}
    </div>
  );
};

export default Middle;
