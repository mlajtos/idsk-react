import React from "react";

const Content = ({ children }: { children: React.ReactNode }) => (
    <main className="govuk-main-wrapper" id="main-content" role="main">{children}</main>
);

export default Content;