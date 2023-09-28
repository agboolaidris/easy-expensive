import React from 'react';
import Image from 'next/image';

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
};

export const ServiceCard = ({ description, icon, title }: ServiceCardProps) => {
  return (
    <div className="rounded-md bg-indigo-200 p-4 text-gray-500 md:p-6">
      <div>
        <Image alt={title} height={40} src={icon} width={40} />
      </div>
      <h3 className="mt-5 text-xl font-semibold">{title}</h3>
      <p className="my-8">{description}</p>
    </div>
  );
};
