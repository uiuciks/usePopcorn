import React from "react";

{
  /*And now we can do even better
which is to take this entire object
which will never change.
And it doesn't depend on anything
that is here in the component.
And we can place it completely outside of the component.
And by doing so,
this object here will not have to be regenerated
by JavaScript each time that this component here rerenders
because, otherwise, each time that a component does rerender
dysfunction will get called again.
And so then this object would also get regenerated again.
And so that's not necessary.} */
}

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};
const starContainerStyle = {
  display: "flex",
  gap: "4px",
};
const textStyle = {
  lineHeight: "0",
  margin: "0",
};

export default function StarRating() {
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: 5 }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>

      <p style={textStyle}>10</p>
    </div>
  );
}
