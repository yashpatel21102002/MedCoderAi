import { AlertCircle } from "lucide-react";

export const Footer = () => {
  return (
    // footer
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="items-center space-y-2 flex flex-col">
          <div className="flex items-center justify-center space-x-2 text-yellow-600">
            <AlertCircle className="h-5 w-5" />
            <span className="font-semibold">
              Educational Use Only - Not for Real Clinical Practice
            </span>
          </div>
          <span className="text-gray-500">
            created by Yash Patel.
          </span>
        </div>
      </div>
    </footer>
  );
};
