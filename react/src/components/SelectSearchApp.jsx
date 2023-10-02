import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import Select from "react-select";

export const SelectSearchApp = (props) => {
    const {
        name = "",
        onChange = () => {},
        value = "",
        placeholder = "Buscar",
        required = false,
        disabled = false,
        title = "",
        infoText = "",
        errorText = "",
        isRtl = false,
        multiple = false,
        defaultValues = [],
        closeMenuOnSelect = false,
        firstOpt = null,
        options = [],
    } = props;

    useEffect(() => {
        if (firstOpt) {
            options.unshift(firstOpt);
        }
    }, [options, firstOpt]);

    const uniqueArray = (data, key) => [
        ...new Map(data.map((x) => [key(x), x])).values(),
    ];

    const changeValue = (e) => {
        onChange({
            target: {
                name,
                value: !e ? "" : e.value,
            },
        });
    };

    const changeValueMultiple = (e) => {
        //Limpiar primero
        let currentValues = value
            .map((c) => c.value === e.find((c) => c.value))
            .filter((c) => c);

        let data = uniqueArray([...currentValues, ...e], (c) => c.value);

        onChange({
            target: {
                name,
                value: data,
            },
        });
    };
    const loadValue = (v) => {
        return options.filter((option) => option.value === v);
    };

    return (
        <Form.Group>
            <label
                htmlFor={`id-input-select-${name}`}
                style={{ fontSize: "12px", fontWeight: 500, marginTop:"0.5rem" }}
            >
                {title}
                {required ? " (*)" : ""}
                {!!title ? ":" : ""}
            </label>

            {multiple && (
                <Select
                    name={name}
                    placeholder={placeholder}
                    options={options}
                    isRtl={isRtl}
                    isDisabled={disabled}
                    isClearable={true}
                    /* value={multiple ? loadValue(value) : ""} */
                    isSearchable={true}
                    defaultValue={defaultValues}
                    required={required}
                    isMulti={true}
                    closeMenuOnSelect={closeMenuOnSelect}
                    onChange={multiple ? changeValueMultiple : changeValue}
                />
            )}
            {!multiple && (
                <Select
                    name={name}
                    placeholder={placeholder}
                    options={options}
                    isRtl={isRtl}
                    isDisabled={disabled}
                    isClearable={true}
                    value={loadValue(value)}
                    isSearchable={true}
                    defaultValue={value}
                    required={required}
                    isMulti={false}
                    onChange={multiple ? changeValueMultiple : changeValue}
                    closeMenuOnSelect={true}
                />
            )}
       {errorText && (
                <Form.Text className={`text-error my-2`}>{errorText}</Form.Text>
            )}
            {infoText && (
                <Form.Text style={{ fontSize: "1vh" }} className={`text-muted my-2`}>{infoText}</Form.Text>
            )}
        </Form.Group>
    );
};

SelectSearchApp.propTypes = {
    placeholder: PropTypes.string,
    infoText: PropTypes.string,
    errorText: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.array,
    defaultValues: PropTypes.array,
    onChange: PropTypes.func,
    closeMenuOnSelect: PropTypes.bool,
    firstOpt: PropTypes.object,
};
