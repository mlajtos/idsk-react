import React from "react";

const Container = ({ children }: { children: React.ReactNode } ) => (
    <div className="govuk-width-container">{children}</div>
);

export default Container;