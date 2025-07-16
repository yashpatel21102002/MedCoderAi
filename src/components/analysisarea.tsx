import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";

type Codeitem = {
  code: string;
  description: string;
  reason: string;
};

type analysisResult = {
  icd10_codes: Codeitem[];
  cpt_codes: Codeitem[];
};

type Props = {
  inputText: string;
  triggerAction: (steps: number) => void;
  setAnalysisResult: React.Dispatch<
    React.SetStateAction<analysisResult | undefined>
  >;
};

const Analysisarea = ({
  triggerAction,
  inputText,
  setAnalysisResult,
}: Props) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  //analysze note function
  const analyzeNote = async () => {
    //setting the loading first
    setIsAnalyzing(true);

    //gettint the response
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/gemini`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ note: inputText }),
      }
    );

    console.log(response);
    //getting the jsong response
    const result = await response.json();

    setAnalysisResult(result.result);

    console.log(result);

    setIsAnalyzing(false);

    triggerAction(3);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Review Clinical Note</CardTitle>
          <CardDescription>
            Review the extracted text and start AI analysis
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <pre className="whitespace-pre-wrap text-sm font-mono text-gray-700">
              {inputText}
            </pre>
          </div>
          {isAnalyzing ? (
            <div className="space-y-3">
              <div className="flex items-center space-x-3 flex-col">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                <span className="text-gray-600">
                  Analyzing clinical note with AI...
                </span>
                <Progress value={33} className="w-full" />
                <p className="text-sm text-gray-500">
                  This may take a few seconds
                </p>
              </div>
            </div>
          ) : (
            <div className="flex space-x-3">
              <Button variant={"outline"} onClick={() => triggerAction(1)}>
                Back to Edit
              </Button>
              <Button
                className="bg-blue-600 hover:bg-blue-700"
                onClick={analyzeNote}
              >
                Analyze with AI
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Analysisarea;
