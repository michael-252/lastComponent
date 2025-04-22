import React from "react";


const componentList = ({items, renderItem}) => {
    if(!items.length)
        return <p>No user available.</p>;
    
    return ( 
        <ul>
            {items.map(renderItem)}
            
        </ul>
     );

};
 
export default componentList;
