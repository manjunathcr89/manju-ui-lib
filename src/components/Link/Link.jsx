import React from "react";
import styles from './Link.module.css';

export const Link = ({ href, target, children, onMouseEnter, onMouseLeave, onFocus, onBlur, onKeyDown }) => {
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

  return (
    <a
      className={styles['m-link']}
      href={href}
      target={target}
      onMouseEnter={(e) => {
        try {
          onMouseEnter && onMouseEnter(e);
        } catch (error) {
          console.error("Error occurred while handling mouse enter event:", error);
          alert("An error occurred while handling mouse enter event.");
        }
      }}
      onMouseLeave={(e) => {
        try {
          onMouseLeave && onMouseLeave(e);
        } catch (error) {
          console.error("Error occurred while handling mouse leave event:", error);
          alert("An error occurred while handling mouse leave event.");
        }
      }}
      onFocus={(e) => {
        try {
          onFocus && onFocus(e);
        } catch (error) {
          console.error("Error occurred while handling focus event:", error);
          alert("An error occurred while handling focus event.");
        }
      }}
      onBlur={(e) => {
        try {
          onBlur && onBlur(e);
        } catch (error) {
          console.error("Error occurred while handling blur event:", error);
          alert("An error occurred while handling blur event.");
        }
      }}
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
    >
      {children}
    </a>
  );
};
