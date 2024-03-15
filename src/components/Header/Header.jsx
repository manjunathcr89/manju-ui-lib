import React from 'react';
import styles from './Header.module.css';

export const Header = ({ children, onMouseEnter, onMouseLeave, onFocus, onBlur, onClick, onKeyDown, onDoubleClick, onContextMenu, onTouchStart, onTouchEnd }) => {
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

    // Handler for click event
    const handleClick = (e) => {
        try {
            onClick && onClick(e);
        } catch (error) {
            console.error("Error occurred while handling click event:", error);
            alert("An error occurred while handling click event.");
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

    // Handler for double click event
    const handleDoubleClick = (e) => {
        try {
            onDoubleClick && onDoubleClick(e);
        } catch (error) {
            console.error("Error occurred while handling double click event:", error);
            alert("An error occurred while handling double click event.");
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

    return (
        <h2
            className={styles['m-header']}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            onDoubleClick={handleDoubleClick}
            onContextMenu={handleContextMenu}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {children}
        </h2>
    );
};
