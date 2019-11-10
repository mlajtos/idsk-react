import React from "react";

const ErrorMessage = ({ children }: { children: React.ReactNode }) => (
    <span className="govuk-error-message">
        <span className="govuk-visually-hidden">Chyba:</span> {children}
    </span>
);

export default ErrorMessage;