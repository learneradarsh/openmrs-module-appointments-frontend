import Select from "react-select";
import {disable, dropdownIndicator, resetSelectContainer, searchIcon} from './Dropdown.module.scss';
import React, {useEffect, useRef, useState} from "react";
import classNames from 'classnames';
import {PropTypes} from 'prop-types';
import {DropdownIndicator} from "./DropdownIndicator.jsx";
import {ValueContainer} from "./ValueContainer.jsx";
import {IndicatorSeparator} from "./IndicatorSeparator.jsx";
import {injectIntl} from "react-intl";
import {isUndefined} from "lodash";

const Dropdown = props => {
    const {options, placeholder, onChange, isDisabled, intl, selectedValue, isClearable, autoFocus} = props;
    const noOptionsMessage = intl.formatMessage({id: 'DROPDOWN_NO_OPTIONS_MESSAGE', defaultMessage: 'No Options'});

    const dropdownRef = useRef(null);
    useEffect(() => {
        autoFocus && dropdownRef && !isDisabled && dropdownRef.current.focus();
    }, [autoFocus, isDisabled]);

    const isComponentDisabled = () => isUndefined(isDisabled) ? false :  isDisabled;

    return (
        <div data-testid="select" className={classNames(isComponentDisabled() ? disable : '')}>
            <Select
                ref={dropdownRef}
                className={classNames(resetSelectContainer, 'react-select-container')}
                classNamePrefix="react-select"
                components={{IndicatorSeparator, ValueContainer, DropdownIndicator}}
                options={options}
                noOptionsMessage={() => noOptionsMessage}
                placeholder={placeholder}
                onChange={onChange}
                isDisabled={isDisabled}
                value={selectedValue}
                isClearable={isClearable}
            />
        </div>
    );
};

export default injectIntl(Dropdown);

Dropdown.propTypes = {
    options: PropTypes.array,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    selectedValue: PropTypes.object,
    isDisabled: PropTypes.bool,
    isClearable: PropTypes.bool,
    autoFocus: PropTypes.bool
};
