/* Modified by: Hima Patel
Change Date: 05/20/2019
Reason of Modificatio: To generate bar graph */

/**
 * Container component for graph components
 */
export default class GraphContainer {
  /**
   * Create a ChartContainer and chart component
   * @param {number} height height of the container
   * @param {number} width width of the container
   * @param {array} data the data to create the bar graph
   */
  constructor(height, width, data) {
    this._height = height;
    this._width = width;
    this._data = data[0];
    this._startTime = new Date().getTime();
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
    // Shift the chart to the left
    //this._chart.setAttribute("transform", "translate(200)");

    const svgRoot = this.createSvgElement("svg");

    svgRoot.setAttribute("height", `${this._height}`);
    svgRoot.setAttribute("width", `${this._width}`);
    svgRoot.setAttribute("viewBox", `0 0 ${this._width} ${this._height}`);
    //svgRoot.appendChild(this._chart);

    //Initialize the data
    var data = this._data;
	  data.barHeight = (data.height - (data.values.length - 1) * data.marginBetweenBars) / data.values.length;
	  data.SVGBars = [];
	  data.labelsObjects = [];
    
    var rect;
    var label;
    for(var i=0; i<data.values.length; ++i) {
      rect = this.createRectangle(i,0,0+(data.barHeight+data.marginBetweenBars)*i,10,data.barHeight,"rect"+i);
      label = this.createLabel(i,data.values[i] + data.labelPaddingLeft,0+(data.barHeight+data.marginBetweenBars)*i,"label"+i);
      
      data.SVGBars.push(rect);
      data.labelsObjects.push(label);
      
      svgRoot.appendChild(rect);
      svgRoot.appendChild(label);
      
      var bbox = label.getBBox();
      label.setAttributeNS(null, "y", bbox.y + bbox.height);	
    }
    this.extend();

    return svgRoot;
  }

  //Create indivudual bar
  createRectangle(index, xCoord, yCoord, width, height, id) {
    var data = this._data;
    var newRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    newRect.setAttributeNS(null, "id", "rect_" + id);
    newRect.setAttributeNS(null, "width", width);
    newRect.setAttributeNS(null, "height", height);
    newRect.setAttributeNS(null, "x", xCoord);
    newRect.setAttributeNS(null, "y", yCoord);
    newRect.setAttributeNS(null, "fill", data.barColors[index%data.barColors.length]);
    return newRect;
  }

  //create label of the each bar
  createLabel(index, xCoord, yCoord, id) {
    var data = this._data;
    var newText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    newText.textContent = data.labelText[index] + " (" + data.values[index]+ ")";
    newText.setAttributeNS(null, "id", "label_" + id);
    newText.setAttributeNS(null, "fill", data.labelColors[index%data.labelColors.length]);
    newText.setAttributeNS(null, "font-family", data.labelFont);
    newText.setAttributeNS(null, "x", xCoord);
    newText.setAttributeNS(null, "y", yCoord + data.barHeight/2);
    newText.style.visibility = "hidden";
    return newText;
  }

  //animate the bar construction on page load
  extend() {
    var data = this._data;
    var startTime = this._startTime;
    var stopArray;
    batch();
    var self = this;

    //create batch
    function batch() {
		stopArray = initStopTab();
		for(var i = 0; i<data.SVGBars.length; ++i) {
			var newWidth = parseInt(data.SVGBars[i].getAttributeNS(null, "width"));
			newWidth = newWidth + 2;
			
			if(newWidth > data.values[i]) {
				stop[i] = 1;
			}
			else {
				data.SVGBars[i].setAttributeNS(null, "width", newWidth);
			}
		}

    //Assigne stop condition of animation
		if(hasToStop(stop)) {
			displayLabels();
			var stopTime = new Date().getTime();
			console.log("Execution time : " + (stopTime-startTime) + "ms");
			return;
		}
			
        setTimeout(batch, 0);
    }

    //Initialize the animation
    function initStopTab() {
      var stopTab = [];
      for(var i=0; i<data.values.length; ++i) {
        stopTab.push(0);
      }
      return stopTab;
    }

    //Stop the animation
    function hasToStop(tab) {
      var sum = 0;
      for(var i=0; i<data.values.length; ++i) {
        sum = sum + tab[i]
      }
      return data.values.length == sum;
    } 

    //Show labels
    function displayLabels() {
      for(var i=0; i<data.labelsObjects.length; ++i) {
        data.labelsObjects[i].style.visibility = "visible";
      }
    }
  } 
}
