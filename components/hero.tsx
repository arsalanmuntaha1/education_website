import Image from 'next/image';
import React from 'react';
import { roboto } from './topbar';
import Button from './button';

function Hero() {
    return (
        <div className="flex justify-center gap-6  items-center ">
            <div className="flex flex-col pr-[60px] pl-20 gap-6">
                <div className='w-[500px]'>
                    <h1 className={`${roboto.className}  font-bold text-[56px]`}>
                        Learn new skills online with ease
                    </h1>
                    <p className={`${roboto.className} py-6 text-lg`}>
                        Discover a wide range of courses covering a variety of subjects, taught by
                        expert instructors.
                    </p>
                </div>
                <div className="flex gap-4 pt-4">
                    <Button name="Start learning now" className="px-6 py-3 bg-black text-white" />
                    <Button name="Explore Courses" className="px-6 py-3" />
                </div>
            </div>
            <div>
                <Image src={'assets/Image.svg'} alt="heroImg" height={800} width={640} />
            </div>
        </div>
    );
}

export default Hero;
