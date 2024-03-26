import React from "react";

const Border = ({customStyles=null}) => {
  return (
    <div className={`max-w-6xl mx-auto px-3 ${customStyles}`}>
      <hr className="border-t-2 border-borderColor"/>
    </div>
  );
};

export default Border;
