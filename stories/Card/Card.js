import React from "react";
import PropTypes from "prop-types";
import { options } from "./constants";
import styles from "./Card.module.css";
import classNames from "classnames";
import { getClasses } from "../..//helpers/styles";
import withStyles from "../../hoc/withStyles";

export const Card = ({
    getStyles,
    children,
    isClickable,
    isDragable,
}) => {

    return (
    <div className={getStyles("card", ["color", "size"], {
        "is-clickable": isClickable,
        "is-dragable": isDragable,
    })}>{children}</div>
  )
}

Card.PropTypes = { 
    getStyles: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(options.colors),
    size: PropTypes.oneOf(options.sizes),
    isClickable: PropTypes.bool,
    isDragable: PropTypes.bool,
}

Card.defaultProps = {
    color: "primary",
    size: "sm", 
}

export default withStyles(styles)(Card);