import React from "react";

const FileUpload = (
    props: JSX.IntrinsicElements["input"],
    ref: React.Ref<HTMLInputElement>
) => (
        <input ref={ref} className="govuk-file-upload" type="file" {...props} />
    );

export default React.forwardRef(FileUpload);