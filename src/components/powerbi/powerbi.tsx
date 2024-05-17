// src/components/powerbi/powerbi.tsx
import { forwardRef } from "react";

interface PowerBIProps {
  title: string;
}

const PowerBI = forwardRef<HTMLIFrameElement, PowerBIProps>(
  ({ title }, ref) => (
    <div className="h-screen flex justify-center items-center flex-col">
      <iframe
        ref={ref}
        title={title}
        src="https://app.powerbi.com/view?r=eyJrIjoiNWVhYTI3ZjUtYzU3Mi00MTRkLTg4MTMtZjY3OGZhMGVmNDY3IiwidCI6IjNlNTQyNjBlLTQyMGItNDgwMy1iZjlhLTVkMWEwYzgwYjUxMyJ9&pageName=ReportSection"
        allowFullScreen
        className="h-[90%] w-[90%] rounded-lg"
      ></iframe>
    </div>
  )
);

PowerBI.displayName = "PowerBI"; // Necessary for forwardRef components

export default PowerBI;
