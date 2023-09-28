import React from 'react';
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export const Banner = () => {
  return (
    <div className="min-h-max rounded-2xl bg-amber-300">
      <div className="grid  md:grid-cols-2">
        <div className="order-last md:order-first">
          <div className="px-4 py-10 leading-loose sm:py-20 sm:px-16">
            <h1 className="text-4xl text-gray-600 sm:text-5xl">
              Track and approve <br /> business expensive easily.
            </h1>
            <p className="my-6 leading-6 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              quibusdam doloremque quod impedit voluptatum voluptate, illo quos
              ipsam. Ut magnam illum necessitatibus sit deserunt molestiae,
              sapiente reiciendis iure assumenda possimus?
            </p>

            <button className="flex items-center gap-1 text-indigo-500 hover:text-indigo-400">
              Sign up <ArrowSmallRightIcon className="h-5 w-7" />
            </button>
          </div>
        </div>
        <div className="h-40 md:h-full ">
          <div className="relative mx-auto h-[120%] md:max-w-lg">
            <div className="absolute left-0 right-0 -top-10 -bottom-10 h-full w-full">
              <Image
                alt="undraw_data_report_bi6l 1.png"
                //className="h"
                fill
                src="/icons/undraw_data_report_bi6l 1.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
