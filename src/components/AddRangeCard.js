import IconButton from "./IconButton";
import Popup from "./PopUp";
import DataPoints from "./DataPointList";
import "styles/AddRangeCard.css";

/**
 * Button used to add a RangeCard component
 */
/* Modified by: Hima Patel
Change Date: 05/20/2019
Reason of Modificatio: Open a popup */
export default class AddRangeCard {
  /**
   * Get the component's HTMLElement
   * @return {HTMLElement}
   */
  getElement() {
    const container = document.createElement("div");
    container.className = "add-range";

    //Open popup to select all datalist option
    const popup = new Popup();
    container.onclick = popup.open;
    const addButton = new IconButton("plus-circle");

    container.appendChild(addButton.getElement());

    return container;
  }
}
