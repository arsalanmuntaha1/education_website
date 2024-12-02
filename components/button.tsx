import React from 'react';
type propsType = {
    name: string;
    className: string;
};
function Button(props: propsType) {
    return (
        <div>
            <button
                className={`${props.className} border-[1px] border-black rounded-[5px] px-5 py-2`}
            >
                {props.name}
            </button>
        </div>
    );
}

export default Button;
