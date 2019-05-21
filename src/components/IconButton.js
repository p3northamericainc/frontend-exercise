import "styles/IconButton.css";
import Popup from "./PopUp";

/**
 * Button containing a [Font Awesome]{@link https://fontawesome.com/} icon
 */
export default class IconButton {
  /**
   * Create an IconButton component
   * @param {string} iconName the font awesome icon name
   * @param {string} funcName the font awesome icon name
   */
  constructor(iconName) {
    this._iconName = iconName;
    this._button = document.createElement("button");
  }

  /**
   * Get the component's HTMLElement
   * @return {HTMLElement}
   */
  getElement() {
    this._button.className = "icon-button";
    
    const icon = document.createElement("i");
    icon.className = `fas fa-${this._iconName} fa-3x`;
    this._button.appendChild(icon);

    return this._button;
  }
}







