import Image from 'next/image';
import React from 'react';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Button from './button';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['400', '700'],
});

function Header() {
    return (
        <div className="bg-[#F7F7F7] pr-16 pl-16 border-[1px] h-[72px] mt-4 border-b-2 border-b-[#676767]">
            <div className="flex justify-between text-center h-11 mt-[14px] mb-[14px]">
                <div className="flex justify-center text-center gap-[8.02px] ">
                    <Image src={'assets/Frame 1.svg'} alt="logo" height={30.38} width={32.58} />
                    <h1 className={`${inter.className} font-bold text-[25.07px]`}>Ddsgnr</h1>
                </div>
                <div className="flex justify-center gap-8">
                    <div>
                        <ul className="flex items-center justify-center text-center gap-8 h-11">
                            <li>
                                <Link href={'/'}>Home</Link>
                            </li>{' '}
                            <li>
                                <Link href={'/courses'}>Courses</Link>
                            </li>{' '}
                            <li>
                                <Link href={'/services'}>Services</Link>
                            </li>{' '}
                            <li>
                                <Link href={'/achievement'}>Achievement</Link>
                            </li>{' '}
                            <li>
                                <Link href={'/about'}>About Us</Link>
                            </li>{' '}
                            <li>
                                <Link href={'/testimonial'}>Testimonial</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-center gap-4">
                        <Button name="Login" />
                        <Button name="Sign Up" />
                    </div>
                </div>
            </div>

            <div className="w-[100vw]">
                Lorem
            </div>
        </div>
    );
}

export default Header;
