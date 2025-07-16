import { Brain } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-white border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* left section of the header */}
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Brain className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">MedCoder AI</h1>
              <p className="text-sm text-gray-600">
                AI-Powered Medical Coding Assistant
              </p>
            </div>
          </div>
          {/* right section of the header */}
          <div>
            <p className="text-sm text-gray-500">
              HIPAA Compliant • Secure Processing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
