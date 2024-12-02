import { title } from 'process';
import React from 'react';
import { roboto } from './topbar';
type propsType = {
    title: string;
    description: string;
};
function List(props: propsType) {
    return (
        <div className={`${roboto.className} w-[296px] text-center`}>
            <h3 className="font-bold text-[40px]">{props.title}</h3>
            <p className="pt-2">{props.description}</p>
        </div>
    );
}

export default List;
