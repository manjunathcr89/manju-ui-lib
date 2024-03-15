import React from "react";

export const Checkbox = ({ label, checked, onChange, onFocus, onBlur, onMouseEnter, onMouseLeave, onKeyDown }) => {
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

  // Handler for checkbox change event
  const handleChange = (e) => {
    try {
      onChange && onChange(e.target.checked);
    } catch (error) {
      console.error("Error occurred while handling checkbox change:", error);
      alert("An error occurred while handling checkbox change.");
    }
  };

  // Handler for checkbox focus event
  const handleFocus = (e) => {
    try {
      onFocus && onFocus(e);
    } catch (error) {
      console.error("Error occurred while handling checkbox focus event:", error);
      alert("An error occurred while handling checkbox focus event.");
    }
  };

  // Handler for checkbox blur event
  const handleBlur = (e) => {
    try {
      onBlur && onBlur(e);
    } catch (error) {
      console.error("Error occurred while handling checkbox blur event:", error);
      alert("An error occurred while handling checkbox blur event.");
    }
  };

  // Handler for mouse enter event
  const handleMouseEnter = (e) => {
    try {
      onMouseEnter && onMouseEnter(e);
    } catch (error) {
      console.error("Error occurred while handling mouse enter event:", error);
      alert("An error occurred while handling mouse enter event.");
    }
  };

  // Handler for mouse leave event
  const handleMouseLeave = (e) => {
    try {
      onMouseLeave && onMouseLeave(e);
    } catch (error) {
      console.error("Error occurred while handling mouse leave event:", error);
      alert("An error occurred while handling mouse leave event.");
    }
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        onKeyDown={(e) => {
          try {
            // Call the appropriate key press handler functions
            handleEnterKeyPress(e);
            handleTabKeyPress(e);
            // Call the provided onKeyDown function with the event
            onKeyDown && onKeyDown(e);
          } catch (error) {
            console.error("Error occurred while handling key press event:", error);
            alert("An error occurred while handling key press event.");
          }
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {label}
    </label>
  );
};
