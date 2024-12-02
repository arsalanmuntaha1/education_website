'use client';
import { cibDribbble, cibLinkedin, cibTwitter } from '@coreui/icons';
import { CIcon } from '@coreui/icons-react';
import Image from 'next/image';
import { Linkedin02Icon } from 'hugeicons-react';

import React from 'react';

type Props = {
    image: string;
    name: string;
    info: string;
    // icon: string;
};

function TeamCard({ image, name, info }: Props) {
    return (
        <div className="flex flex-col h-[273px] w-[394.67px] mt-16 items-center">
            <div>
                <Image src={image} alt="profile" height={80} width={80} />
            </div>
            <div className="mt-6">
                <h1 className="font-semibold text-xl">{name}</h1>
                <p className="text-lg">{info}</p>
            </div>
            <div className="flex justify-center gap-[14px] mt-14">
                <CIcon icon={cibLinkedin} height={18} />
                <CIcon icon={cibTwitter} height={18} />
                <CIcon icon={cibDribbble} height={18} />
            </div>
        </div>
    );
}

export default TeamCard;
