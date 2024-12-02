import React from 'react';
import { roboto } from './topbar';
import Button from './button';

function Courses() {
    return (
        <div className={`${roboto.className} text-center `}>
            <div>
                <h1 className="font-bold text-[56px] ">Courses</h1>
                <p className="text-lg pt-4">Your Ultimate Guide to learning</p>
            </div>
            <div>
                <div className="flex justify-center mt-[60px]">
                    <Button name="Popular" className="py-2 px-4 border-none border-b-[#676767]" />
                    <Button name="Recommended" className="py-2 px-4 border-none" />
                    <Button name="Best Price" className="py-2 px-4 border-none" />
                </div>
                <div></div>
                <div className="mt-16">
                    <Button name="View All Courses" className="py-2 px-4" />
                </div>
            </div>
        </div>
    );
}

export default Courses;
