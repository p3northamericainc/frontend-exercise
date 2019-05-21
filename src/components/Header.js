import "styles/Header.css";
import ExportButtons from "./ExportButtons";

/* Modified by: Hima Patel
Change Date: 05/20/2019
Reason of Modificatio: Remove logo */

/**
 * The page header
 */
export default class Header {
  /**
   * Creates a Header component
   */
  constructor() {
    this._container = document.createElement("div");
  }

  /**
   * Get the component's HTMLElement
   * @return {HTMLElement}
   */
  getElement() {
    this._container.className = "header";
    
    const title = document.createElement("h1");
    title.innerText = "Chuck's Ducks";

    const exportButtons = new ExportButtons();
    this._container.appendChild(title);
    this._container.appendChild(exportButtons.getElement());

    return this._container;
  }
}
