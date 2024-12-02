import React from 'react';
import { Roboto } from 'next/font/google';
import { Facebook, FacebookIcon, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'], // Specify weights you need
    style: ['normal', 'italic'], // Specify styles you need
    display: 'swap', // Improves font rendering
});
function Topbar() {
    return (
        <div className="bg-primary  pl-[62px] pr-16 h-[54px]  shadow-innerSmall">
            <div className="flex  justify-between pt-3 pb-3 gap-8 ">
                <div className={`${roboto.className} flex items-center gap-4  text-sm`}>
                    <p>Phone Number: 956 742 455 678</p>
                    <p className="border-[#676767] border-l-2 pl-4 text-sm ">
                        Email: <span className="text-sm"> info@ddsgnr.com</span>
                    </p>
                </div>
                <div className="flex gap-4">
                    <Image
                        src={'assets/facebook-f-brands-solid.svg'}
                        height={15}
                        width={15}
                        alt="facebook"
                    />
                    <Image
                        src={'assets/instagram-brands-solid.svg'}
                        height={24}
                        width={24}
                        alt="instagram"
                    />
                    <Image
                        src={'assets/twitter-brands-solid.svg'}
                        height={24}
                        width={24}
                        alt="twitter"
                    />
                    <Image
                        src={'assets/linkedin-brands-solid.svg'}
                        height={24}
                        width={24}
                        alt="linkedin"
                    />
                </div>
            </div>
        </div>
    );
}

export default Topbar;
