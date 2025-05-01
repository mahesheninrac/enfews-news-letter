import React from 'react';

function withLoading(Component) {
    return function wrapperLoading({ isLoading, ...props }) {
        if (isLoading) {
            return <span className="loader"></span>
        } else {
            return <Component {...props} />
        }
    }
}

export default withLoading;