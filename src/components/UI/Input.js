import React from 'react';

const input = ( props,ref ) => {
    const inputClasses = ['InputElement'];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push('Invalid');

    }
    return (
        <div className="Input">
        <label className='Label'>{props.label}</label>
        <input
                ref={ref}
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} 
                onKeyDown={props.onKeyDown}
                />
        <span className={props.error!==''?'active':''}>{props.error}</span>
        <style jsx>{`
            .Input{
                position:relative;
            }
            .Input span{
                position:absolute;
                display:none,
                height:1rem;
                font-size:0.8rem;
                top:0;
                right:0;
                font-size:12px;
                font-family:GothamHTF-Book, sans-serif;
                background:black; 
                color:white;
            }
            .active{
                display:block;
            }
            .Label {
                display:block;
                font-size: 1rem;
                text-transform: capitalize;
            }
            .InputElement {
                margin-top: 4px;
                padding: 0.5rem;
                font-size: 1rem;
                font-family: "Open Sans", sans-serif;
                background-color: #f3f3f3;
                border: 0;
                border-radius: 4px;
                margin-bottom: 1rem;
                transition: all 250ms ease-in-out;
            }
            .InputElement:focus {
                outline: none;
                box-shadow: 0px 0px 12px 0.8px #3474dbb2;
            }
            .Invalid {
                border: 1px solid red;
                background-color: #FDA49A;
            }
        `}</style>
        </div>
    );

};

const forwardedInput = React.forwardRef(input)
export default forwardedInput;