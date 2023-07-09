import Popover from "./Popover";

const buttonCollapse = document.querySelector(".button-collapse");

document.addEventListener("DOMContentLoaded", () => {
    const text = "The action takes place in the city of Belfast in Northern Ireland. The local population here is terrorized by a serial killer, and the city police cannot figure out this maniac in any way. Detective Stella Gibson is taken to investigate this mysterious dark case."
    const popover = new Popover(buttonCollapse, text);
    document.addEventListener("click", popover.onClick);
});
