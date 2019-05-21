/* Added by: Hima Patel
Add Date: 05/20/2019
Reason to Add: Generate Bargraph */

/**
 * A SVG based pie chart contained in a SVG <g> element
 */
export default class BarGraph {
  /**
   * Create a PieChart component
   * @param {number} diameter The diameter of the chart in px
   * @param {Array<any>} data The data to display in the chart
   */
  constructor(data) {
    console.log(data[0]);
    this._data = data[0];
  }

  /**
   * Creates an SVG element in the correct namespace
   * @param {string} tagName the tag name to create
   */
  createSvgElement(tagName) {
    return document.createElementNS("http://www.w3.org/2000/svg", tagName);
  }

  /**
   * Get the component's HTMLElement
   * @return {HTMLElement}
   */

  getElement() {
     

    const slicesGroup = this.createSvgElement("g");
    slicesGroup.className.baseVal = "slices";
    return slicesGroup;
    
  }

  constructBars() {
    
    var mainSVGObj = document.getElementById("mainSVG");
    
    
    extend();
  }
}
