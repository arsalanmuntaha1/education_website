'use client';
import React from 'react';
import { roboto } from './topbar';
import Button from './button';
import Image from 'next/image';
import { inter } from './header';
import CIcon from '@coreui/icons-react';
import { cibFacebook, cibInstagram, cibLinkedin, cibTwitter } from '@coreui/icons';

function Footer() {
    return (
        <div className={`${roboto.className}  p-20`}>
            <div className="flex justify-between">
                <div>
                    <h1 className="font-semibold text-lg">Subscribe to our newsletter</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className=" w-[400px]">
                    <div className="flex gap-4">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            color="#505050"
                            className="p-3 border-[1px] border-black w-[265px] rounded-[5px]"
                        />
                        <Button name="Subscribe" className="py-3 px-6" />
                    </div>
                    <p className="text-xs pt-4">
                        By subscribing you agree to with our{' '}
                        <span className="underline "> Privacy Policy</span>
                    </p>
                </div>
            </div>
            <div className="flex gap-10 py-20">
                <div className="flex items-start gap-[8.02px] w-[250px]">
                    <Image src={'/assets/Frame 1.svg'} alt="logo" height={30.38} width={32.58} />
                    <h1 className={`${inter.className} font-bold text-[25.07px]`}>Ddsgnr</h1>
                </div>
                <div>
                    <h5 className="font-semibold mb-4 w-[250px]">Courses</h5>
                    <ul>
                        <li className="py-2">Business</li>
                        <li className="py-2">Development</li>
                        <li className="py-2">Technology</li>
                        <li className="py-2">Design</li>
                        <li className="py-2">Programming</li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-semibold mb-4 w-[250px]">Resources</h5>
                    <ul>
                        <li className="py-2">Career</li>
                        <li className="py-2">Resume</li>
                        <li className="py-2">Learning</li>
                        <li className="py-2">Interview Preparation</li>
                        <li className="py-2">Jobs</li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-semibold mb-4 w-[250px]">About Us</h5>
                    <ul>
                        <li className="py-2">Contact</li>
                        <li className="py-2">Help/Support</li>
                        <li className="py-2">FAQ</li>
                        <li className="py-2">Terms and Conditions</li>
                        <li className="py-2">Partners</li>
                    </ul>
                </div>
            </div>
            <hr className='border-[1px] border-black mb-[33px]' />
            <div className='flex justify-between'>
                <div className='flex gap-6'>
                    <p>2023 Ddsgnr. All right reserved.</p>
                    <p className='underline'>Privacy Policy</p>
                    <p className='underline'>Terms of Service</p>
                    <p className='underline'>Cookies Settings</p>
                </div>
                <div className='flex gap-3'>
                    <CIcon icon={cibFacebook} height={24} />
                    <CIcon icon={cibInstagram} height={24} />
                    <CIcon icon={cibTwitter} height={24} />
                    <CIcon icon={cibLinkedin} height={24} />
                </div>
            </div>
        </div>
    );
}

export default Footer;
