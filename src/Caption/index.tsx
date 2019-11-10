import React from "react";

type Size = "xl" | "l" | "m" | "s";

const Caption = ({ size, ...props }: { size: Size } & JSX.IntrinsicElements["span"]) => (
    <span className={`govuk-caption-${size}`} {...props} />
);

export default Caption;