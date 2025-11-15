import React from 'react';
import FlowChartNode from './flowChartNode';
import { Globe } from 'lucide-react';


// Define the data for your visa application process
const visaProcessSteps = [
  { id: '1', label: 'Select country', icon: "<Globe />" },
  { id: '2', label: 'Select Visa Type', icon: '💳' },
  { id: '3', label: 'Fill up form', icon: '📄' },
  { id: '4', label: 'Upload Required Document', icon: '📃' },
  { id: '5', label: 'Make your payment', icon: '💵' },
  { id: '6', label: 'Track your visa status', icon: '📊' },
];

const FlowChart: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto">
      {/* --- Row 1: Select Country -> Select Visa Type (Left to Right) --- */}
      <div className="flex justify-between items-center w-full my-10 relative">
        <FlowChartNode data={visaProcessSteps[0]} />
        <div className="horizontal-connector dashed-connector grow h-0 mx-4 relative" />
        <FlowChartNode data={visaProcessSteps[1]} />
      </div>

      {/* --- Vertical Connector 1 (R1-C2 to R2-C2) --- */}
      <div className="h-30 relative w-full">
        {/* The 'right' value is calculated to align with the center of the right node (Node width 160px/2 + padding/gap) */}
        <div className="vertical-connector dashed-connector-vertical absolute h-full right-[calc(30%-100px)]" />
      </div>

      {/* --- Row 2: Upload Docs <- Fill up form (Right to Left) --- */}
      <div className="flex justify-between items-center w-full my-10 relative reverse-flow">
        <FlowChartNode data={visaProcessSteps[3]} />
        <div className="horizontal-connector dashed-connector grow h-0 mx-4 relative" />
        <FlowChartNode data={visaProcessSteps[2]} />
      </div>
      
      {/* --- Vertical Connector 2 (R2-C1 to R3-C1) --- */}
      <div className="h-30 relative w-full">
        {/* The 'left' value is calculated to align with the center of the left node */}
        <div className="vertical-connector dashed-connector-vertical absolute h-full left-[calc(15%)]" />
      </div>

      {/* --- Row 3: Make Payment -> Track Status (Left to Right) --- */}
      <div className="flex justify-between items-center w-full my-10 relative">
        <FlowChartNode data={visaProcessSteps[4]} />
        <div className="horizontal-connector dashed-connector grow h-0 mx-4 relative" />
        <FlowChartNode data={visaProcessSteps[5]} />
      </div>
    </div>
  );
};

export default FlowChart;