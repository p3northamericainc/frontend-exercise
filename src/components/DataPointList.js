import "styles/DataPointList.css";
import Data from "../data";
import RangeCard from "./RangeCard";
import Popup from "./PopUp";

/* Added by: Hima Patel
Add Date: 05/20/2019
Reason to Add: Load all available data points to create the data card */

/**
 * Contains all of the data points content
 */
export default class DataPointList {
  /**
   * Create a data point list component as popup
   */
  constructor() {
    this._listContainer = document.createElement("div");
    this._data = Data;
  }

  /**
   * Get the component's HTMLElement
   * @return {HTMLElement}
   */
  getElement() {
    this._listContainer.className = "list-container";

    // data point list title 
    const listTitle = document.createElement("h1");
    listTitle.innerText = "Data Points";
    listTitle.className = "list-title";

    // initialize list
    const list = document.createElement("ul");
    list.className = "list-ul";

    // Add list items and set it's click event
    var self = this;
    this._data.forEach(function (point, index) {
      const listItem = document.createElement("li");
      listItem.className = "list-li";
      listItem.innerText = point["title"];
      
      listItem.addEventListener("click", function() {  
        self.getDataCard(point);
        //delete self._data[index];
     }, false);
      list.appendChild(listItem);
    });

    this._listContainer.appendChild(listTitle);
    this._listContainer.appendChild(list);
    return this._listContainer;
  }

  // create datacard on click of data list option
  getDataCard(dataPoint) {
    const newDataPointCard = new RangeCard(dataPoint);
    this.insertBefore(newDataPointCard.getElement(),document.querySelector("div.add-range"))

    //close popup
    const popUp = new Popup();
    popUp.close();
  }

  // display data card
  insertBefore(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode);
  }
}