import React from 'react';
type propsType = {
    name: string;
};
function Button(props: propsType) {
    return (
        <div>
            <button className='border-[1px] rounded-[5px] px-5 py-2'>{props.name}</button>
        </div>
    );
}

export default Button;
