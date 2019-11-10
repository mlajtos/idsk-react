import React from "react";

import Label from "../Label";

const Radio = (
    { children, ...props }: JSX.IntrinsicElements["input"],
    ref: React.Ref<HTMLInputElement>
) => {
    const id = props.id ? props.id : `${props.name}-${props.value}`;

    return (
        <div className="govuk-radios__item">
            <input ref={ref} className="govuk-radios__input" type="radio" id={id} {...props} />
            <Label className="govuk-radios__label" htmlFor={id}>{children}</Label>
        </div>
    )
};

export default React.forwardRef(Radio);