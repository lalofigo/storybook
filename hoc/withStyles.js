import React from "react";
import { getClasses } from "../helpers/styles";

const withStyles = (styles) => (WrappedComponent) => {

    const WithStylesComponent = (props) => {
        const allProps = {...WrappedComponent.defaultProps, ...props};
        return <WrappedComponent {...props} getStyles={getClasses(styles)(allProps)} />;
    }

    WithStylesComponent.displayName = WrappedComponent.displayName;

    return WithStylesComponent;
}

export default withStyles;