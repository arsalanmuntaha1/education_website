import Image from 'next/image';
import React from 'react';
import { roboto } from './topbar';
type props = {
    image: string;
    title: string;
    description: string;
};

function CategoryCard({ image, title, description }: props) {
    return (
        <div className={`${roboto.className} w-[410.67px] bg-primary flex p-4 gap-8  items-center`}>
            <div className="p-[34px] bg-white rouded-[5px]">
                <Image src={image} alt="icon" height={32} width={32} />
            </div>
            <div className="text-justify">
                <h1 className="font-semibold text-xl">{title}</h1>
                <p className="text-lg">{description}</p>
            </div>
        </div>
    );
}

export default CategoryCard;
