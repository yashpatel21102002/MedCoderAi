import { FileText, Upload } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

interface Props {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  triggerAction: (step: number) => void;
}

const Uploadarea = ({ triggerAction, setInputText, inputText }: Props) => {
  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-blue-600" />
            <span>Enter Clinical Visit Note</span>
          </CardTitle>
          <CardDescription>
            Paste your SOAP note or free text, or upload a PDF/DOCX file for
            automatic extraction
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Paste your clinical visit note here (SOAP format recommended)..."
            className="min-h-[300px] font-mono text-sm"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <div className="flex items-center justify-center">
            <div className="text-gray-400 text-sm">OR</div>
          </div>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
            <input
              type="file"
              accept=".pdf, .docx, .txt"
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-lg font-medium text-gray-600">
                Upload Medical Document
              </p>
              <p className="text-sm text-gray-500">
                Supports PDF, DOCX, and TXT files
              </p>
            </label>
          </div>

          <Button
            className="w-full bg-blue-500 hover:bg-blue-700 cursor-pointer"
            onClick={() => triggerAction(2)}
          >
            Continue to Analysis
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Uploadarea;
