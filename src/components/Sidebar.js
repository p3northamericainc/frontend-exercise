import "styles/Sidebar.css";
import IconButton from "./IconButton";


/* Modified by: Hima Patel
Change Date: 05/20/2019
Reason of Modificatio: Added small logo */

/**
 * The sidebar
 */
export default class Sidebar {
  /**
   * Creates a Sidebar component
   */
  constructor() {
    this._container = document.createElement("div");
  }

  /**
   * Get the component's HTMLElement
   * @return {HTMLElement}
   */
  getElement() {
    // Sidebar container
    this._container.className = "sidebar";
    
    //display logo
    const logoContainer = document.createElement("div");
    logoContainer.className = "logo-container";

    // Navigation Buttons
    const homeButton = new IconButton("home");
    const analyticsButton = new IconButton("chart-line");
    const reportsButton = new IconButton("file-alt");
    const settingsButton = new IconButton("cog");

    //this._container.appendChild(logoElement);
    this._container.appendChild(logoContainer);
    this._container.appendChild(homeButton.getElement());
    this._container.appendChild(analyticsButton.getElement());
    this._container.appendChild(reportsButton.getElement());
    this._container.appendChild(settingsButton.getElement());

    return this._container;
  }
}
