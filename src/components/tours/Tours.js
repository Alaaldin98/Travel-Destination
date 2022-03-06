import React from "react";
const Tours = ({ data }) => {
    return (
        <div>
            {
                data.map((element, index) => {
                    return (
                        <div key={index}><h3>{element.name}</h3>
                            <img src={element.image} alt="" /></div>
                    )
                })
            }
        </div>
    )
};
export default Tours;