import React from "react";

const Button = (props: JSX.IntrinsicElements["button"]) => (
    <button className="govuk-button" {...props} />
);

export default Button;