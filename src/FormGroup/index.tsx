import React from "react";

interface Props {
    hasError?: boolean
};

const FormGroup = ({ hasError, className, ...props }: Props & JSX.IntrinsicElements["div"]) => (
    <div className={`govuk-form-group ${hasError ? "govuk-form-group--error" : ""} ${className}`} {...props} />
);

export default FormGroup;
