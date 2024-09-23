window.addEventListener("load", function() {
  // Is this what javascript libraries are for?
  document.getElementById("nav-panel").innerHTML =
  `
    <label for="toggle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
      </svg>
    </label>
    <input type="checkbox" id="toggle">
    <div id="nav-content">
      <ul>
        <li><a href="/demo/index.html">Home</a></li>
        <li><a href="/demo/spells.html">Spells</a></li>
        <li><a href="/demo/recaps.html">Recaps</a></li>
        <li>
          <label for="pcs">Player Characters</label>
          <input type="checkbox" id="pcs">
          <div class="sub-panel">
            <ul>
              <li><a href="/demo/pcs/dante.html">Dante</a></li>
              <li><a href="/demo/pcs/james.html">James</a></li>
              <li><a href="/demo/pcs/josie.html">Josie</a></li>
              <li><a href="/demo/pcs/rico.html">Rico</a></li>
            </ul>
          </div>
        </li>
        <li><a href="/demo/npcs.html">Non-player Characters</a></li>
      </ul>
    </div>
  `;
});
