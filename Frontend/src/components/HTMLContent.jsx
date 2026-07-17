import React from "react";

const HTMLContent = ({ content, className, ...props }) => {
    if (!content) return null;
    
    return (
        <span 
            className={className} 
            dangerouslySetInnerHTML={{ __html: content }} 
            {...props}
        />
    );
};

export default HTMLContent;
