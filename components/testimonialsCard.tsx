'use client';
import CIcon from '@coreui/icons-react';

import Image from 'next/image';
import React from 'react';
import { cilStar } from '@coreui/icons';
import { Star } from 'lucide-react';
type props = {
    details: string;
    name: string;
    image: string;
    info: string;
};
function TestimonialsCard({ info, image, name, details }: props) {
    return (
        <div className="bg-white w-[416px] p-8 border-[1px] border-black">
            <div className="flex gap-1 mb-6 ">
                <Star fill="black" />
                <Star fill="black" />
                <Star fill="black" />
                <Star fill="black" />
                <Star fill="black" />
            </div>
            <div>
                <p className="text- text-left w-[298.67px]">{info}</p>
            </div>
            <div className="flex text-justify gap-5">
                <div>
                    <Image
                        src={image}
                        alt="profile"
                        height={56}
                        width={56}
                        className="rounded-full"
                    />
                </div>
                <div>
                    {' '}
                    <h1 className="font-semibold ">{name}</h1>
                    <p>{details}</p>
                </div>
            </div>
        </div>
    );
}

export default TestimonialsCard;
