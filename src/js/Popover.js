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
            box-sizing: border-box;
            overflow-y: hidden;
            color: gray;
            font-size: 16px;
            line-height: 1.5;
            position: absolute;
            width: 500px;
            height: 0;
            transition: height 0.5s ease-in-out;
            left: 0px;
            top: ${this.#element.offsetHeight + 20}px;
            border: solid 1px gray;
            border-radius: 5px;
            z-index: 999;
    `;
    this.#element.append(popover);
    this.#popoverDom = popover;

    setTimeout(() => {
      popover.style.height = "98px";
    }, 0);
  }

  onClick = (e) => {
    const target = e.target;
    if (target.classList.contains("button-collapse")) {
      if (!this.#popoverDom) {
        this.#element.classList.add("focus");
        this.#setPopover();
      } else {
        this.#element.classList.remove("focus");
        this.#popoverDom.style.height = "0px";
        setTimeout(() => {
          this.#popoverDom.remove();
          this.#popoverDom = null;
        }, 500);
      }
    }

    if (!target.classList.contains("button-collapse") && this.#popoverDom) {
      this.#element.classList.remove("focus");
      this.#popoverDom.style.height = "0px";
      setTimeout(() => {
        this.#popoverDom.remove();
        this.#popoverDom = null;
      }, 500);
    }
  };
}
