import "styles/PopUp.css";
import DataPoints from "./DataPointList";

/* Added by: Hima Patel
Add Date: 05/20/2019
Reason to Add: Construct popup and open, close it. */

/**
 * Contains DOM of popup structure
 */
export default class PopUp {
   /**
   * Create an Popup component
   */
  
  constructor() {
    this._overlay = document.createElement("div");
  }

  getElement() {
    this._overlay.className = "is-hidden modal-overlay";
   
    //modal popup content area
    const modal = document.createElement("div");
    modal.className = "modal";

    //modal popup close button
    const close = document.createElement("span");
    close.className = "button-close";
    close.innerText = "x";
    close.onclick = this.close;
    
    //load content
    const content = new DataPoints();

    //append all content
    modal.appendChild(close);
    modal.appendChild(content.getElement());
    this._overlay.appendChild(modal);
    
    return this._overlay;
  }

  //open the popup
  open(content) {
    //this._overlay.classList.remove('is-hidden');
    document.getElementsByClassName('modal-overlay')[0].className = "modal-overlay";
  }

  //close popup
  close() {
    //this._overlay.classList.add('is-hidden');
    document.getElementsByClassName('modal-overlay')[0].className = "is-hidden modal-overlay";
  }
}
