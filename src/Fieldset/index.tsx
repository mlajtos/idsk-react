import React from "react";

interface Props {
    legend: React.ReactNode
};

const Fieldset = (
    { legend = null, children, ...props }: Props & JSX.IntrinsicElements["fieldset"]
) => (
        <fieldset className="govuk-fieldset" {...props}>
            <legend className="govuk-fieldset__legend">{legend}</legend>
            {children}
        </fieldset>
    );

export default Fieldset;