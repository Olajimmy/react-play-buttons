import React from "react";
//the parent is going to pass props
//rather than call out the props object
//we are going to destructure.
//children isnt explicitly passed in, it is implicit if the
//component has anything btwn the opening and the closing tags.
//when i destructure, i need to make sure that what am naming the variables
//is what they were called by the parent when they were passed
function Button({ onClick, children }) {
  return (
    <>
      <button className="button" onClick={onClick}>
        {children}
      </button>
    </>
  );
}
export default Button;
