window.App.PrintButton = (function(ResponseSelector) {
  return {
    /**
     * Attaches click events to a button and displays the response at the selected index.
     *
     * @param  {HTMLButtonElement} btn - Button element.
     * @param  {number} index Index of a response to display.
     * @return {undefined} Nothing
     * @example
     * window.App.PrintButton.attachEvents(document.createElement('button'), 1)
     */
    attachEvents: function(btn, index) {
      btn.addEventListener("click", function() {
        ResponseSelector.selectResponse(index);
      });
    }
  };
})(window.App.ResponseSelector);
