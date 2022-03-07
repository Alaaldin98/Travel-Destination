import React from "react";
const Tours = ({ data }) => {
    return (
        <div>
 {
        data.map((ele => {
            return (
            <>
                    <div className="child-div">
                        <Tour data={ele} />
                    </div>
            </>
                    )
                })
                )
            }
        </div>
    )
};export default Tours;