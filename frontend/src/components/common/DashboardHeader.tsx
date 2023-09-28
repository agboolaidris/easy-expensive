import React from 'react';

type DashboardHeaderProps = {
  title: string;
  tip?: string;
  description?: string;
};

export const DashboardHeader = ({
  title,
  tip,
  description,
}: DashboardHeaderProps) => {
  return (
    <div className="max-w-4xl text-gray-500">
      <p className="text-sm text-gray-400">{tip}</p>
      <h2 className="mt-1 text-4xl font-semibold text-gray-800">{title}</h2>
      <h5 className="mt-2 leading-7">{description}</h5>
    </div>
  );
};
