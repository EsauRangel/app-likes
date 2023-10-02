import { useState } from "react";
import { setDataInPath } from "../helpers/jsonHelpers";

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState({ ...initialState, errors: {} });

    // if (values === undefined) {
    //     return false
    // }


    const handleInputChange = ({ target }, path = null) => {
        let obj = path
            ? setDataInPath(values, `${path}.${target.name}`, target.value)
            : { [target.name]: target.value };

        setValues({
            ...values,
            ...obj
        });


        if (values?.errors[target.name]) {
            delete values.errors[target.name];
        }
    };

    const handleInputChangeUpperCase = ({ target }, path = null) => {
        let obj = path
            ? setDataInPath(values,`${path}.${target.name}`,target.value.toUpperCase())
            : { [target.name]: target.value.toUpperCase() };

        setValues({
            ...values,
            ...obj
        });

        if (values?.errors[target.name]) {
            delete values.errors[target.name];
        }
    };

    const handleInputChangeLowerCase = ({ target }, path = null) => {
        let obj = path
            ? setDataInPath(
                    values,
                    `${path}.${target.name}`,
                    target.value.toLowerCase()
                )
            : { [target.name]: target.value.toLowerCase() };

        setValues({
            ...values,
            ...obj,
        });

        if (values?.errors[target.name]) {
            delete values.errors[target.name];
        }
    };

    const reset = () => setValues({ ...initialState, errors: {} });

    const setInputValue = (attribute, value, path = null) => {
        let obj = path
        ? setDataInPath(values, `${path}.${attribute}`, value)
        : {[attribute]:  value };

        setValues({
            ...values,
            ...obj,
        });
        
        if (values?.errors[attribute]) {
            delete values.errors[attribute];
        }
    };

    const setErrors = (errors) => {
        setValues({
            ...values,
            errors,
        });
        // values.errors = errors;
    };

    const setFormValues = (attributes = {}) => {
        setValues({
            ...values,
            ...attributes,
            errors: {}
        });
    };


    return {
        values,
        handleInputChange,
        reset,
        setInputValue,
        setErrors,
        setFormValues,
        handleInputChangeUpperCase,
        handleInputChangeLowerCase,
        errors: values.errors,
        allForm: values,
    };
};
