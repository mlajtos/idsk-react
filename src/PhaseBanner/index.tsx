import React from "react";

const PhaseBanner = ({ tag, children }: { tag: React.ReactNode, children: React.ReactNode }) => (
    <div className="govuk-phase-banner">
        <p className="govuk-phase-banner__content">
            <Tag>{tag}</Tag>
            <span className="govuk-phase-banner__text">
                {children}
            </span>
        </p>
    </div>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
    <strong className="govuk-tag govuk-phase-banner__content__tag">
        {children}
    </strong>
);

export default PhaseBanner;