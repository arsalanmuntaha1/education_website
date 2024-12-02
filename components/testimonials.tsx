'use client';
import CIcon from '@coreui/icons-react';
import React from 'react';
import TestimonialsCard from './testimonialsCard';
import { roboto } from './topbar';
import Image from 'next/image';
import { cilArrowCircleLeft, cilArrowCircleRight } from '@coreui/icons';

function Testimonials() {
    return (
        <div className={`${roboto.className} bg-primary text-center mt-28 p-16`}>
            <div>
                <h2 className="font-bold text-5xl">Customer testimonials</h2>
                <p className="text-lg mt-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div></div>
            <div>
                <div className="flex gap-8 mt-20">
                    <TestimonialsCard
                        info='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."'
                        image="/assets/team3.svg"
                        name="James Nduku"
                        details="Software Developer"
                    />
                    <TestimonialsCard
                        info='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."'
                        image="/assets/team1.svg"
                        name="Erick Kipkemboi"
                        details="Scrum Master"
                    />
                    <TestimonialsCard
                        info='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."'
                        image="/assets/team6.svg"
                        name="Stephen Kerubo"
                        details="UI/UX Designer"
                    />
                </div>
                <div className='flex justify-between mt-12'>
                    <div className=' flex items-center'>
                        {' '}
                        <Image
                            src={'/assets/Slider Dots.svg'}
                            alt="sliderDots"
                            height={8}
                            width={72}
                        />
                    </div>
                    <div className="flex gap-[15px]">
                        <CIcon icon={cilArrowCircleLeft} height={48} width={48}/>
                        <CIcon icon={cilArrowCircleRight} height={48} width={48}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
