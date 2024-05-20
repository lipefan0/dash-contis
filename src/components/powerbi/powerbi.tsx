// src/components/powerbi/powerbi.tsx
import { forwardRef } from "react";

interface PowerBIProps {
  title: string;
  src?: string;
}

const PowerBI = forwardRef<HTMLIFrameElement, PowerBIProps>(
  ({ title, src }, ref) => (
    <div className="h-screen flex justify-center items-center flex-col">
      <iframe
        ref={ref}
        title={title}
        src={src}
        allowFullScreen
        className="h-[90%] w-[90%] rounded-lg"
      ></iframe>
    </div>
  )
);

PowerBI.displayName = "PowerBI"; // Necessary for forwardRef components

export default PowerBI;
