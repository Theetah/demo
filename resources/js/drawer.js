// This script adds functionality to the "drawer" class ul and any related elements.

// event for a button at the top of each drawer instance thing
function collapseDrawer(event) {
  const drawer = event.target.parentElement;
  const listElements = drawer.querySelectorAll("input");

  for (let i = 0; i < listElements.length; i++) {
    const e = listElements[i];
    e.checked = false;
  }
}
