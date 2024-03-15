import React from "react";

export const Tooltip = ({ text, children, onMouseEnter, onMouseLeave, onClick, onFocus, onBlur, onKeyDown, onKeyPress, onTouchStart, onTouchEnd, onContextMenu, onMouseDown, onMouseUp }) => {
  // const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  // Handler for mouse enter event
  const handleMouseEnter = (e) => {
    try {
      onMouseEnter && onMouseEnter(e);
      // setIsTooltipVisible(true);
    } catch (error) {
      console.error("Error occurred while handling mouse enter event:", error);
      alert("An error occurred while handling mouse enter event.");
    }
  };

  // Handler for mouse leave event
  const handleMouseLeave = (e) => {
    try {
      onMouseLeave && onMouseLeave(e);
      // setIsTooltipVisible(false);
    } catch (error) {
      console.error("Error occurred while handling mouse leave event:", error);
      alert("An error occurred while handling mouse leave event.");
    }
  };

  // Handler for click event
  const handleClick = (e) => {
    try {
      onClick && onClick(e);
    } catch (error) {
      console.error("Error occurred while handling click event:", error);
      alert("An error occurred while handling click event.");
    }
  };

  // Handler for focus event
  const handleFocus = (e) => {
    try {
      onFocus && onFocus(e);
    } catch (error) {
      console.error("Error occurred while handling focus event:", error);
      alert("An error occurred while handling focus event.");
    }
  };

  // Handler for blur event
  const handleBlur = (e) => {
    try {
      onBlur && onBlur(e);
    } catch (error) {
      console.error("Error occurred while handling blur event:", error);
      alert("An error occurred while handling blur event.");
    }
  };

  // Handler for key down event
  const handleKeyDown = (e) => {
    try {
      onKeyDown && onKeyDown(e);
    } catch (error) {
      console.error("Error occurred while handling key down event:", error);
      alert("An error occurred while handling key down event.");
    }
  };

  // Handler for key press event
  const handleKeyPress = (e) => {
    try {
      onKeyPress && onKeyPress(e);
    } catch (error) {
      console.error("Error occurred while handling key press event:", error);
      alert("An error occurred while handling key press event.");
    }
  };

  // Handler for touch start event
  const handleTouchStart = (e) => {
    try {
      onTouchStart && onTouchStart(e);
    } catch (error) {
      console.error("Error occurred while handling touch start event:", error);
      alert("An error occurred while handling touch start event.");
    }
  };

  // Handler for touch end event
  const handleTouchEnd = (e) => {
    try {
      onTouchEnd && onTouchEnd(e);
    } catch (error) {
      console.error("Error occurred while handling touch end event:", error);
      alert("An error occurred while handling touch end event.");
    }
  };

  // Handler for context menu event
  const handleContextMenu = (e) => {
    try {
      onContextMenu && onContextMenu(e);
    } catch (error) {
      console.error("Error occurred while handling context menu event:", error);
      alert("An error occurred while handling context menu event.");
    }
  };

  // Handler for mouse down event
  const handleMouseDown = (e) => {
    try {
      onMouseDown && onMouseDown(e);
    } catch (error) {
      console.error("Error occurred while handling mouse down event:", error);
      alert("An error occurred while handling mouse down event.");
    }
  };

  // Handler for mouse up event
  const handleMouseUp = (e) => {
    try {
      onMouseUp && onMouseUp(e);
    } catch (error) {
      console.error("Error occurred while handling mouse up event:", error);
      alert("An error occurred while handling mouse up event.");
    }
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <span
        style={{ cursor: "pointer" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onKeyPress={handleKeyPress}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onContextMenu={handleContextMenu}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {children}
      </span>
      {true && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            backgroundColor: '#5D3A1D',
            color: "#fff",
            padding: "5px",
            borderRadius: "4px",
            zIndex: 999,
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

