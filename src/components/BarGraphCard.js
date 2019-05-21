import Card from "./Card";
import BarGraph from "./BarGraph";
import GraphContainer from "./GraphContainer";
import "styles/BarGraphCard.css";

/* Added by: Hima Patel
Add Date: 05/20/2019
Reason to Add: Show bar graph and provide data to generate graph */

/**
 * The card component for bar graph data
 */
export default class PBarGraphDataCard {
  /**
   * Create a Bar graph component
   */
  constructor() {
    this._data = [
      {
        "values" : [620, 311, 653, 275, 596, 720, 985],
        "marginBetweenBars" : 2,
        "barColors" : ["#1ABC9C", "#3498DB", "#9B59B6", "#34495E", "#3498DB", "#F1C40F", "#E74C3C"],
        "labelColors" : ["#000000"],
        "labelFont" : "Verdana",
        "labelText" : ["classic ducks", "tiny ducks", "giant ducks", "debugging ducks","digital ducks", "colorful ducks","alarmed ducks"],
        "labelPaddingLeft" : -10,
        "height" : 400,
        "width" : 400,
        "backgroundColor" : "#445566",
        "label" : true,
        "value" : true,
        "labelWidth" : 10
        }
    ];
  }

  /**
   * Get the component's HTMLElement
   * @return {HTMLElement}
   */
  getElement() {
    // Graph title
    const title = document.createElement("h4");
    title.innerText = "Production";

    // Bar Graph
    const height = 400;
    const width = 800;

    //const barGraph = new BarGraph(this._data);
    const graphContainer = new GraphContainer(
      height,
      width,
      this._data
    ).getElement();

    const card = new Card([title, graphContainer]).getElement();
    card.classList.add("bar-graph-card");
    return card;
  }
}
