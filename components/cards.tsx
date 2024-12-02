import Image from 'next/image';
import { title } from 'process';
import React from 'react';
type propsType = {
    title: string;
    description: string;
   
};
function Cards(image:string,title:string,description:string) {
    return (
        <div>
            <div>
                <Image src={image} alt='icon' />
            </div>
            <div>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Cards;
