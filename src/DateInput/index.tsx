import React from "react";

const DateInput = () => (
    <div className="govuk-date-input" id="passport-issued">
        <div className="govuk-date-input__item">
            <div className="govuk-form-group">
                <label className="govuk-label govuk-date-input__label" htmlFor="passport-issued-day">
                    Day
          </label>
                <input className="govuk-input govuk-date-input__input govuk-input--width-2" id="passport-issued-day" name="passport-issued-day" type="number" pattern="[0-9]*" />
            </div>
        </div>
        <div className="govuk-date-input__item">
            <div className="govuk-form-group">
                <label className="govuk-label govuk-date-input__label" htmlFor="passport-issued-month">
                    Month
          </label>
                <input className="govuk-input govuk-date-input__input govuk-input--width-2" id="passport-issued-month" name="passport-issued-month" type="number" pattern="[0-9]*" />
            </div>
        </div>
        <div className="govuk-date-input__item">
            <div className="govuk-form-group">
                <label className="govuk-label govuk-date-input__label" htmlFor="passport-issued-year">
                    Year
          </label>
                <input className="govuk-input govuk-date-input__input govuk-input--width-4" id="passport-issued-year" name="passport-issued-year" type="number" pattern="[0-9]*" />
            </div>
        </div>
    </div>
);

export default DateInput;