import React from "react";

const Label = ({ className, ...props }: JSX.IntrinsicElements["label"]) => (
    <label className={`govuk-label ${className}`} {...props} />
);

export default Label;