import React from "react";

export const Input = ({ type, value, onChange, onKeyDown, onFocus, onBlur }) => {
  // Handler for Enter key press
  const handleEnterKeyPress = (e) => {
    try {
      if (e.key === "Enter") {
        // Call the provided function for Enter key press
        onKeyDown && onKeyDown("Enter");
      }
    } catch (error) {
      console.error("Error occurred while handling Enter key press:", error);
      alert("An error occurred while handling Enter key press.");
    }
  };

  // Handler for Tab key press
  const handleTabKeyPress = (e) => {
    try {
      if (e.key === "Tab") {
        // Call the provided function for Tab key press
        onKeyDown && onKeyDown("Tab");
      }
    } catch (error) {
      console.error("Error occurred while handling Tab key press:", error);
      alert("An error occurred while handling Tab key press.");
    }
  };

  // Handler for Delete key press
  const handleDeleteKeyPress = (e) => {
    try {
      if (e.key === "Delete") {
        // Call the provided function for Delete key press
        onKeyDown && onKeyDown("Delete");
      }
    } catch (error) {
      console.error("Error occurred while handling Delete key press:", error);
      alert("An error occurred while handling Delete key press.");
    }
  };

  // Handler for input change event
  const handleChange = (e) => {
    try {
      onChange && onChange(e);
    } catch (error) {
      console.error("Error occurred while handling input change:", error);
      alert("An error occurred while handling input change.");
    }
  };

  // Handler for input focus event
  const handleFocus = (e) => {
    try {
      onFocus && onFocus(e);
    } catch (error) {
      console.error("Error occurred while handling input focus event:", error);
      alert("An error occurred while handling input focus event.");
    }
  };

  // Handler for input blur event
  const handleBlur = (e) => {
    try {
      onBlur && onBlur(e);
    } catch (error) {
      console.error("Error occurred while handling input blur event:", error);
      alert("An error occurred while handling input blur event.");
    }
  };

  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      onKeyDown={(e) => {
        try {
          // Call the appropriate key press handler functions
          handleEnterKeyPress(e);
          handleTabKeyPress(e);
          handleDeleteKeyPress(e);
          // Call the provided onKeyDown function with the event
          onKeyDown && onKeyDown(e);
        } catch (error) {
          console.error("Error occurred while handling key press event:", error);
          alert("An error occurred while handling key press event.");
        }
      }}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};
