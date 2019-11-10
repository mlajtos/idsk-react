import React from "react";

interface Props {
    errors: React.ReactNode[]
}

const ErrorSummary = ({ errors }: Props) => (
    errors.length > 0 ? (
        <div className="govuk-error-summary" role="alert" tabIndex={-1}>
            <h2 className="govuk-error-summary__title">
                Ups, niečo sa pokazilo!
            </h2>
            <div className="govuk-error-summary__body">
                <p>Pre pokračovanie prosím opravne nasledovné chyby...</p>
                <ul className="govuk-list govuk-error-summary__list">
                    {
                        errors.map((error, i) => (
                            <li key={i}>{error}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
        : null
);

export default ErrorSummary;