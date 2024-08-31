import React from 'react';
import '../components/button.css';  // Importing button-specific styles

function Button({ children, className, ...props }) {
    return (
        <button className={`button-primary ${className}`} {...props}>
            {children}
        </button>
    );
}

export default Button;
