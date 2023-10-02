import PropTypes from "prop-types";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export const IconApp = ({
    iconClassName,
    color,
    onClick = () => {},
    description = "_",
    isClickable = false,
}) => {
    let styleIcon = {};

    if (color) {
        styleIcon.color = color;
    }
    if (isClickable) {
        styleIcon.cursor = "pointer";
    }

    // styleIcon.margin = "4px";

    return (
        <OverlayTrigger
            placement={description ? "bottom" : "click"}
            overlay={
                <Tooltip hidden={description == "_"}>{description}</Tooltip>
            }
        >
            <i
                className={iconClassName}
                aria-hidden="true"
                style={styleIcon}
                onClick={onClick}
            ></i>
        </OverlayTrigger>
    );
};

IconApp.propTypes = {
    iconClassName: PropTypes.string.isRequired,
    color: PropTypes.string,
    description: PropTypes.string,
    onClick: PropTypes.func,
};
