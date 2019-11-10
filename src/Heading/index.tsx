import React from "react";

type Size = "xl" | "l" | "m" | "s";

const Heading = ({ size, children }: { size: Size, children: React.ReactNode }) => {
    return React.createElement(
        `h${sizeToNumber(size)}`,
        { className: `govuk-heading-${size}` },
        children
    );
};

const sizeToNumber = (size: Size) => (
    ({
        "xl": 1,
        "l": 2,
        "m": 3,
        "s": 4
    }[size])
);

export default Heading;