import React from "react";

interface Props {
    hasError?: boolean,
}

const Textarea = (
    { hasError, ...props }: Props & JSX.IntrinsicElements["textarea"],
    ref: React.Ref<HTMLTextAreaElement>) => (
        <textarea ref={ref} className={`govuk-textarea ${hasError ? "govuk-textarea--error" : ""}`} {...props} />
    );

export default React.forwardRef(Textarea);