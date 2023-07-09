export default class Popover {
  #element;
  #popoverDom;
  #text;
  constructor(element, text) {
    this.#element = element;
    this.#text = text;
    this.#popoverDom = null;
  }

  #setPopover() {
    const popover = document.createElement("div");
    popover.classList.add("popover");
    popover.textContent = this.#text;
    popover.style.cssText = `
            display; block;
            color: gray;
            font-size: 16px;
            line-height: 1.5;
            position: absolute;
            width: 500px;
            left: 0px;
            top: ${this.#element.offsetHeight + 20}px;
            border: solid 1px gray;
            border-radius: 5px;
            transform: scale(1, 1);
            z-index: 999;
    `;
    this.#element.append(popover);
    this.#element.querySelector(".popover").classList.add("transition");
  }

  onClick = (e) => {
    const target = e.target;
    this.#popoverDom = document.querySelector(".popover");
    if (!this.#popoverDom) {
      this.#element.classList.add("focus");
      this.#setPopover();
    } else {
      this.#element.classList.remove("focus");
      this.#popoverDom.remove();
    }

    if (!target) {
      this.#element.classList.remove("focus");
      this.#popoverDom.remove();
    }
  };
}
