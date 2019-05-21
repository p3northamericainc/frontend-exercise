import "styles/Content.css";
import RangeCard from "./RangeCard";
import PercentageCard from "./PercentageCard";
import AddRangeCard from "./AddRangeCard";
import PieChartCard from "./PieChartCard";
import BarGraphCard from "./BarGraphCard";
import Popup from "./PopUp";

/* Modified by: Hima Patel
Change Date: 05/20/2019
Reason of Modificatio: To accomodate bar graph content at the bottom*/

/**
 * Contains all of the data content
 */
export default class Content {
  /**
   * Create a Content component
   */
  constructor() {
    this._container = document.createElement("div");
    this._data = [
      {
        title: "Unique Customers",
        value: 300,
        upperRange: 450,
        description: "Total number of unique customers till date."
      }
    ];
  }

  /**
   * Get the component's HTMLElement
   * @return {HTMLElement}
   */
  getElement() {
    this._container.className = "content";

    /***************************
     ***      Customers      ***
     ***************************/
    const customersTitle = document.createElement("h3");
    customersTitle.innerText = "Customers";

    const cardsContainer = document.createElement("div");
    cardsContainer.className = "range-card-container";
    const uniqueCustomersCard = new RangeCard(this._data[0]);

    const addCard = new AddRangeCard();

    cardsContainer.appendChild(uniqueCustomersCard.getElement());
    cardsContainer.appendChild(addCard.getElement());

    /***************************
     ***        Store        ***
     ***************************/
    const storeTitle = document.createElement("h3");
    storeTitle.innerText = "Store";

    const storeContainer = document.createElement("div");
    storeContainer.className = "store-container";
    const storeColumn1 = document.createElement("div");
    storeColumn1.className = "store-column";
    const storeColumn2 = document.createElement("div");
    storeColumn2.className = "store-column";

    storeContainer.appendChild(storeColumn1);
    storeContainer.appendChild(storeColumn2);

    const storePieCard = new PieChartCard();
    storeColumn1.appendChild(storePieCard.getElement());

    const customerRetentionCard = new PercentageCard({
      title: "Customer Retention",
      value: 83.4
    });
    storeColumn2.appendChild(customerRetentionCard.getElement());
    const perfectOrderRateCard = new PercentageCard({
      title: "Perfect Order Rate",
      value: 97.2
    });
    storeColumn2.appendChild(perfectOrderRateCard.getElement());

    /***************************
     ***         Sale        ***
     ***************************/
    const saleTitle = document.createElement("h3");
    saleTitle.innerText = "Sales";

    const saleContainer = document.createElement("div");
    saleContainer.className = "store-container";
    const saleColumn1 = document.createElement("div");
    saleColumn1.className = "store-column";

    saleContainer.appendChild(saleColumn1);

    const saleBarGraph = new BarGraphCard();
    saleColumn1.appendChild(saleBarGraph.getElement());
    const popup = new Popup();

    this._container.appendChild(customersTitle);
    this._container.appendChild(cardsContainer);
    this._container.appendChild(storeTitle);
    this._container.appendChild(storeContainer);
    this._container.appendChild(saleTitle);
    this._container.appendChild(saleContainer);
    this._container.appendChild(popup.getElement());

    return this._container;
  }
}
