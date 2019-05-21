import Card from "./Card";
import RadialProgessBar from "./RadialProgressBar";
import "styles/RangeCard.css";

/* Modified by: Hima Patel
Change Date: 05/20/2019
Reason of Modificatio: Add tooltip on help button hover, 
                        add remove button, 
                        add remove functionality on remove datacard button */

/**
 * Displays range data
 */
export default class RangeCard {
  /**
   * Create a RangeCard component
   * @param {Array<any>} data The data to display
   */
  constructor(data) {
    this._data = data ? data : {};
  }

  /**
   * Get the component's HTMLElement
   * @return {HTMLElement}
   */
  getElement() {
    const { title, value, upperRange, description } = this._data;
    const children = [];

    const titleElement = document.createElement("h4");
    titleElement.innerText = title;

    const valueElement = new RadialProgessBar(
      value / upperRange,
      value
    ).getElement();

    // Displays the upper range of the data
    const outOfElement = document.createElement("p");
    outOfElement.innerText = `out of ${upperRange} target`;

    children.push(titleElement);
    children.push(valueElement);
    children.push(outOfElement);

    //remove button
    const removeButton = document.createElement("button");
    removeButton.className = "remove-button";
    var self = this;
    removeButton.addEventListener("click", function() {  
      self.remove(this);
    }, false);
    const removeIcon = document.createElement("i");
    removeIcon.className = "fas fa-times-circle";
    removeButton.appendChild(removeIcon);
    children.push(removeButton);

    // Help button
    const helpButton = document.createElement("button");
    helpButton.className = "tooltip help-button";
    const helpIcon = document.createElement("i");
    helpIcon.className = "fas fa-question-circle";
    const helpDescription = document.createElement("span");
    helpDescription.innerText = description;
    helpDescription.className = "tooltiptext";
    helpButton.appendChild(helpIcon);
    helpButton.appendChild(helpDescription);
    children.push(helpButton);

    const card = new Card(children).getElement();
    card.className += " range-card";

    return card;
  }

  remove(elem) {
    elem.parentElement.parentElement.removeChild(elem.parentElement);
  }
}
