import React from "react";

import Label from "../Label";

const Checkbox = (
    { children, ...props }: JSX.IntrinsicElements["input"],
    ref: React.Ref<HTMLInputElement>
) => {
    const id = props.id ? props.id : `${props.name}-${props.value}`;

    return (
        <div className="govuk-checkboxes__item">
            <input ref={ref} className="govuk-checkboxes__input" type="checkbox" id={id} {...props} />
            <Label className="govuk-checkboxes__label" htmlFor={id}>{children}</Label>
        </div>
    )
};

export default React.forwardRef(Checkbox);