import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface AuthButtonsProps {
  onGoogleClick?: () => void;
  onYahooClick?: () => void;
  onEmailClick?: () => void;
}

export default function AuthButtons({ 
  onGoogleClick, 
  onYahooClick, 
  onEmailClick 
}: AuthButtonsProps) {
  return (
    <div className="space-y-4 w-full">
      {/* Google Button */}
      <Button
        variant="outline"
        className="w-full h-12 bg-gray-50 border-gray-200 hover:bg-gray-100 text-black font-medium"
        onClick={onGoogleClick}
      >
        <Image
          src="/google-icon.svg"
          alt="Google"
          width={20}
          height={20}
          className="mr-3 flex-shrink-0"
        />
        <span className="truncate">Google</span>
      </Button>

      {/* Yahoo Button */}
      <Button
        variant="outline"
        className="w-full h-12 bg-gray-50 border-gray-200 hover:bg-gray-100 text-black font-medium"
        onClick={onYahooClick}
      >
        <Image
          src="/yahoo-icon.svg"
          alt="Yahoo"
          width={50}
          height={20}
          className="mr-3 flex-shrink-0"
        />
      </Button>

      {/* Email Button */}
      <Button
        variant="outline"
        className="w-full h-12 bg-gray-50 border-gray-200 hover:bg-gray-100 text-black font-medium"
        onClick={onEmailClick}
      >
        <Image
          src="/email-icon.svg"
          alt="Email"
          width={20}
          height={20}
          className="mr-3 flex-shrink-0"
        />
        <span className="truncate">Email</span>
      </Button>
    </div>
  );
}
