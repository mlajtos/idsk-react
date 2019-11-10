import React from "react";

const Hint = ({ children }: { children: React.ReactNode }) => (
    <span className="govuk-hint">
        {children}
    </span>
);

export default Hint;