import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface StatChartProps {
  title: string;
  percentage: number;
  description: string;
}

const StatChart = ({ title, percentage, description }: StatChartProps) => {
  return (
    <Card className="border-0 shadow-lg overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <span className="text-2xl font-black text-destructive">{percentage}%</span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-3 mb-3 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-red-500 to-red-600 h-full rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
        
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default StatChart;