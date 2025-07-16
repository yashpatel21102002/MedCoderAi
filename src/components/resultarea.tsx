import { AlertCircle, Brain, ChevronDown, Copy } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

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
  analysisResult: analysisResult;
  triggerAction: (step: number) => void;
};
const Resultarea = ({ analysisResult, triggerAction }: Props) => {
  console.log(analysisResult);
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* suggested codes */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>
                <Brain className="h-5 w-5 text-blue-600" />
                <span>Suggested Codes</span>
              </CardTitle>
              <CardDescription>
                AI-recommendad medical codes with reason to include
              </CardDescription>
            </div>
            <Button variant={"outline"} className="flex items-center space-x-2">
              <Copy />
              <span>Export Selected</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="icd10" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="icd10">ICD-10 Codes</TabsTrigger>
              <TabsTrigger value="cpt">CPT Codes</TabsTrigger>
            </TabsList>

            <TabsContent value="icd10" className="space-y-4">
              {analysisResult.icd10_codes.map((code, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500">
                  <CardContent className="pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Tooltip>
                            <TooltipTrigger>
                              {" "}
                              <span className="font-mono font-bold text-lg text-blue-600">
                                {code.code}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>ICD-10 Diagnosis Code</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <p className="text-gray-900 font-medium mb-2">
                          {code.description}
                        </p>
                        <Collapsible>
                          <CollapsibleTrigger className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800">
                            <ChevronDown className="h-4 w-4" />
                            <span>Why this code?</span>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <div className="mt-2 p-3 bg-gray-50 rounded text-sm text-gray-700">
                              {code.reason}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="cpt" className="space-y-4">
              {analysisResult.cpt_codes.map((code, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500">
                  <CardContent className="pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Tooltip>
                            <TooltipTrigger>
                              {" "}
                              <span className="font-mono font-bold text-lg text-blue-600">
                                {code.code}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>ICD-10 Diagnosis Code</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <p className="text-gray-900 font-medium mb-2">
                          {code.description}
                        </p>
                        <Collapsible>
                          <CollapsibleTrigger className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800">
                            <ChevronDown className="h-4 w-4" />
                            <span>Why this code?</span>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <div className="mt-2 p-3 bg-gray-50 rounded text-sm text-gray-700">
                              {code.reason}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>

          <div className="mt-6 pt-6 border-t flex justify-between items-center">
            <Button onClick={() => triggerAction(1)} variant="outline">
              Analyze New Note
            </Button>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <AlertCircle className="h-4 w-4" />
              <span>
                Always verify codes with clinical documentation before billing
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Resultarea;
