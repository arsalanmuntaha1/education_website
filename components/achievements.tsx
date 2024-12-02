import React from 'react';
import { roboto } from './topbar';
import List from './list';

function Achievements() {
    return (
        <div className={`${roboto.className} flex flex-wrap justify-center py-28 px-16 `}>
            <h2 className="font-bold text-5xl">Our Achivements</h2>
            <p className='text-lg pt-6 text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                nulla, ut commodo diam libero vitae erat.
            </p>
            <div className='flex gap-6 pt-8'>
                <List title='+200' description='Courses'/>
                <List title='50K' description='Mentors'/>
                <List title='370k' description='Students'/>
                <List title='100+' description='Recognition'/>
            </div>
        </div>
    );
}

export default Achievements;
