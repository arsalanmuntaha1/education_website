import React from 'react';
import { roboto } from './topbar';
import Image from 'next/image';

function Companies() {
    return (
        <div className="flex gap-16 bg-primary py-20 px-16">
            <div>
                <h5 className={`${roboto.className} font-bold text-2xl`}>
                    Trusted by 2000+ companies worldwide.
                </h5>
            </div>
            <div className='flex py-[8.75px]'>
                <Image src={'assets/Airbnb Logo.svg'} alt="logo" height={38.52} width={123.8} />
                <Image src={'assets/Airbnb Logo2.svg'} alt="logo" height={38.52} width={123.8} />
                <Image src={'assets/Airbnb Logo3.svg'} alt="logo" height={38.52} width={123.8} />
                <Image src={'assets/Airbnb Logo4.svg'} alt="logo" height={38.52} width={123.8} />
                <Image src={'assets/Airbnb Log04.svg'} alt="logo" height={38.52} width={123.8} />
                <Image src={'assets/Airbnb Logo6.svg'} alt="logo" height={38.52} width={123.8} />
            </div>
        </div>
    );
}

export default Companies;
