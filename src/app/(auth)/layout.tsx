import type { ReactNode } from "react";
import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Panel - Visual and Informational */}
      <div className="lg:hidden bg-purple-600 p-6 text-white text-center">
        <h2 className="text-xl font-bold mb-4">
          Daily Health monitoring Assistance for Older adults
        </h2>
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-center">
            <div className="w-1 h-4 bg-white mr-3"></div>
            <span>Health Monitoring</span>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-1 h-4 bg-white mr-3"></div>
            <span>Medication Reminder</span>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-1 h-4 bg-white mr-3"></div>
            <span>Emergency Support</span>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-1 h-4 bg-white mr-3"></div>
            <span>Voice Interactions</span>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex lg:w-1/2 relative bg-gray-50">
        {/* Healthcare Professional Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/healthcare-professional.jpg"
            alt="Healthcare Professional"
            width={400}
            height={600}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Purple overlay with text */}
        <div className="absolute bottom-0 left-0 right-0 bg-purple-600 p-8">
          <h2 className="text-white text-xl font-bold text-center mb-6">
            Daily Health monitoring Assistance for Older adults
          </h2>

          <div className="space-y-3">
            <div className="flex items-center text-white">
              <div className="w-1 h-4 bg-white mr-3"></div>
              <span>Health Monitoring</span>
            </div>
            <div className="flex items-center text-white">
              <div className="w-1 h-4 bg-white mr-3"></div>
              <span>Medication Reminder</span>
            </div>
            <div className="flex items-center text-white">
              <div className="w-1 h-4 bg-white mr-3"></div>
              <span>Emergency Support</span>
            </div>
            <div className="flex items-center text-white">
              <div className="w-1 h-4 bg-white mr-3"></div>
              <span>Voice Interactions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Authentication Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-4 sm:p-8 flex-1">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
