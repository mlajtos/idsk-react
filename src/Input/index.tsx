import React from "react";

interface Props {
    hasError?: boolean,
    width?: number
};

const Input = (
    { hasError, width, ...props }: Props & JSX.IntrinsicElements["input"],
    ref: React.Ref<HTMLInputElement>
) => (
        <input
            ref={ref}
            className={`govuk-input ${hasError ? "govuk-input--error" : ""} ${width ? `govuk-input--width-${width}` : ""}`}
            {...props}
        />
    );

export default React.forwardRef(Input);